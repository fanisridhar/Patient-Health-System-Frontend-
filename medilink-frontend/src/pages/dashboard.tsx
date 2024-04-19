import React, { Fragment, useEffect, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from "../components/NavBar";

interface DashboardProps {
  maxWidth: string;
  small: boolean;
  user: any; // Adjust the type according to your user object structure
}

const Dashboard: React.FC<DashboardProps> = ({ maxWidth, small, user }) => {
  const calendarRef = useRef<HTMLDivElement>(null); // Ref for calendar element

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const getDaysInMonth = (month: number, year: number): number => {
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number): number => {
      return new Date(year, month, 1).getDay();
    };

    const createCalendar = (month: number, year: number): void => {
      if (calendarRef.current) {
        const calendarElement = calendarRef.current;
        calendarElement.innerHTML = '';

        const daysInMonth = getDaysInMonth(month, year);
        const firstDayOfMonth = getFirstDayOfMonth(month, year);

        // Add week days
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weekRow = document.createElement('div');
        weekRow.className = 'week-row';
        weekDays.forEach(day => {
          const dayCell = document.createElement('div');
          dayCell.className = 'day';
          dayCell.textContent = day;
          weekRow.appendChild(dayCell);
        });
        calendarElement.appendChild(weekRow);

        let dayCounter = 1;

        for (let i = 0; i < 7; i++) {
          const weekRow = document.createElement('div');
          weekRow.className = 'week-row';

          for (let j = 0; j < 7; j++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day';

            if (i === 0 && j < firstDayOfMonth) {
              // Empty cell before the start of the month
              dayCell.textContent = '';
            } else if (dayCounter > daysInMonth) {
              // Empty cell after the end of the month
              dayCell.textContent = '';
            } else {
              // Fill cell with day number
              dayCell.textContent = dayCounter.toString();
              if (dayCounter === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayCell.classList.add('current-date');
              }
              dayCounter++;
            }

            weekRow.appendChild(dayCell);
          }

          calendarElement.appendChild(weekRow);
        }
      }
    };

    createCalendar(currentMonth, currentYear);
  }, []);

  const loaded = true; // Assuming loaded state is always true

  return (
    <Fragment>
      <Header />
      {!loaded && <div>Loading...</div>}
      {user && !user.detail && <div>Onboarding Component</div>}
      <Grid container direction="row" justify="center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <Grid item container direction="column" style={{ width: maxWidth, padding: small ? '2rem 1rem' : '3rem 0', height: '100%', position: 'relative' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Patient Dashboard, go ahead and explore features:)
          </Typography>
          {user && (
            <div>
              <Typography variant="body1">
                Name: {user.name}
              </Typography>
              <Typography variant="body1">
                Age: {user.age}
              </Typography>
              <Typography variant="body1">
                Gender: {user.gender}
              </Typography>
              {/* Add more patient details as needed */}
            </div>
          )}
          {/* Calendar */}
          <div className="calendar" ref={calendarRef}></div>
        </Grid>
      </Grid>
      <style jsx>{`
        .calendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border: 1px solid #ccc;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .week-row {
          display: flex;
          justify-content: space-around;
          flex-direction: column; /* Change direction to column */
        }

        .day {
          padding: 10px;
          text-align: center;
          border: 1px solid #ccc;
        }

        .current-date {
          background-color: lightblue;
          border-radius: 50%;
        }
      `}</style>
    </Fragment>
  );
};

export default Dashboard;
