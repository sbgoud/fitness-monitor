import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Accordion, Button, Form } from 'react-bootstrap';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};

  const [activities, setActivities] = useState({
    wakeUp: { time: '7:00 AM', note: '', checked: false },
    breakfast: { time: '8:00 AM', note: '', meal: '', checked: false },
    lunch: { time: '12:00 PM', note: '', meal: '', checked: false },
    dinner: { time: '7:00 PM', note: '', meal: '', checked: false },
  });

  const [previousDays, setPreviousDays] = useState([]);

  useEffect(() => {
    // Fetch previous days' data from Vercel Blob
    fetchPreviousData();
  }, []);

  const fetchPreviousData = async () => {
    // Implement fetching logic from Vercel Blob
  };

  const handleCheck = (activity) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setActivities((prev) => ({
      ...prev,
      [activity]: { ...prev[activity], time: currentTime, checked: true },
    }));
  };

  const handleSubmit = async () => {
    // Save data to Vercel Blob
    await saveDataToBlob();
    navigate('/login');
  };

  const saveDataToBlob = async () => {
    // Implement saving logic to Vercel Blob
  };

  return (
    <div className="container">
      <header>
        <div>{username}</div>
        <h1>Fitness Schedule</h1>
        <Button onClick={() => navigate('/login')}>Logout</Button>
      </header>
      <Form>
        {Object.keys(activities).map((activity) => (
          <div key={activity}>
            <Form.Check
              type="checkbox"
              label={activity.charAt(0).toUpperCase() + activity.slice(1)}
              checked={activities[activity].checked}
              onChange={() => handleCheck(activity)}
            />
            <Form.Control
              type="text"
              placeholder="Note"
              value={activities[activity].note}
              onChange={(e) =>
                setActivities((prev) => ({
                  ...prev,
                  [activity]: { ...prev[activity], note: e.target.value },
                }))
              }
            />
            {activity !== 'wakeUp' && (
              <>
                <Button variant="info">i</Button>
                <Form.Control
                  type="text"
                  placeholder="Meal"
                  value={activities[activity].meal}
                  onChange={(e) =>
                    setActivities((prev) => ({
                      ...prev,
                      [activity]: { ...prev[activity], meal: e.target.value },
                    }))
                  }
                />
              </>
            )}
          </div>
        ))}
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      <Accordion>
        {previousDays.map((day, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{day.date}</Accordion.Header>
            <Accordion.Body>{JSON.stringify(day.data)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Home;
