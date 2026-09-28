import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const [completed, setCompleted] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const workouts = [
    {
      id: 1,
      name: 'Cardio Blast',
      type: 'Cardio',
      duration: '30 min',
      calories: '320 kcal',
      level: 'Intermediate',
      icon: '🏃'
    },
    {
      id: 2,
      name: 'Strength Training',
      type: 'Strength',
      duration: '45 min',
      calories: '410 kcal',
      level: 'Advanced',
      icon: '🏋️'
    },
    {
      id: 3,
      name: 'Core Crusher',
      type: 'Core',
      duration: '20 min',
      calories: '180 kcal',
      level: 'Beginner',
      icon: '🔥'
    },
    {
      id: 4,
      name: 'Full Body',
      type: 'Workout',
      duration: '50 min',
      calories: '500 kcal',
      level: 'Intermediate',
      icon: '💪'
    }
  ];

  const toggleComplete = (id) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((workoutId) => workoutId !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  const progress = Math.round((completed.length / workouts.length) * 100);

  return (
    <div className="app">
      {/* Keep Navbar exactly the same */}
      <NavbarComponent />

      <main className="dashboard">

        {/* Hero Section */}
        <section className="hero">
          <div>
            <p className="welcome">WELCOME BACK 👋</p>
            <h1>Let's get <span>stronger.</span></h1>
            <p className="hero-text">
              Stay consistent, track your workouts and keep pushing
              yourself toward your goals.
            </p>

            <button
              className="primary-btn"
              onClick={() =>
                document.getElementById('workouts').scrollIntoView({
                  behavior: 'smooth'
                })
              }
            >
              Start Workout →
            </button>
          </div>

          <div className="hero-icon">
            💪
          </div>
        </section>

        {/* Stats */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div>
              <h3>1,240</h3>
              <p>Calories Burned</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div>
              <h3>8.5 hrs</h3>
              <p>Workout Time</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div>
              <h3>12</h3>
              <p>Day Streak</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div>
              <h3>{progress}%</h3>
              <p>Today's Progress</p>
            </div>
          </div>

        </section>

        {/* Progress */}
        <section className="progress-section">
          <div className="section-heading">
            <div>
              <p className="small-title">TODAY'S GOAL</p>
              <h2>Workout Progress</h2>
            </div>

            <strong>{completed.length} / {workouts.length}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="progress-text">
            {progress === 100
              ? '🔥 Amazing! You completed all today\'s workouts!'
              : `${workouts.length - completed.length} workout(s) remaining today.`}
          </p>
        </section>

        {/* Workouts */}
        <section id="workouts" className="workouts-section">

          <div className="section-heading">
            <div>
              <p className="small-title">TRAINING PLAN</p>
              <h2>Today's Workouts</h2>
            </div>
          </div>

          <div className="workout-grid">

            {workouts.map((workout) => {
              const isCompleted = completed.includes(workout.id);

              return (
                <div
                  className={`workout-card ${
                    selectedWorkout === workout.id ? 'selected' : ''
                  } ${isCompleted ? 'completed' : ''}`}
                  key={workout.id}
                  onClick={() => setSelectedWorkout(workout.id)}
                >

                  <div className="workout-top">
                    <div className="workout-icon">
                      {workout.icon}
                    </div>

                    {isCompleted && (
                      <span className="done-badge">✓ Done</span>
                    )}
                  </div>

                  <p className="workout-type">{workout.type}</p>

                  <h3>{workout.name}</h3>

                  <div className="workout-info">
                    <span>⏱ {workout.duration}</span>
                    <span>🔥 {workout.calories}</span>
                  </div>

                  <div className="level">
                    {workout.level}
                  </div>

                  <button
                    className={
                      isCompleted
                        ? 'complete-btn completed-btn'
                        : 'complete-btn'
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleComplete(workout.id);
                    }}
                  >
                    {isCompleted ? 'Completed ✓' : 'Mark Complete'}
                  </button>

                </div>
              );
            })}

          </div>
        </section>

        {/* Selected Workout */}
        {selectedWorkout && (
          <section className="selected-workout">

            <div>
              <p className="small-title">CURRENTLY SELECTED</p>

              <h2>
                {workouts.find(
                  (workout) => workout.id === selectedWorkout
                ).icon}{' '}
                {workouts.find(
                  (workout) => workout.id === selectedWorkout
                ).name}
              </h2>

              <p>
                Get ready to give your best. Consistency is the key to
                achieving your fitness goals.
              </p>
            </div>

            <button
              className="start-btn"
              onClick={() =>
                alert('Workout started! Let’s go! 💪')
              }
            >
              Start Now
            </button>

          </section>
        )}

        {/* Motivation */}
        <section className="motivation">
          <div className="motivation-icon">⚡</div>

          <div>
            <p className="small-title">DAILY MOTIVATION</p>
            <h2>Don't wish for it. Work for it.</h2>
            <p>
              Small progress every day adds up to massive results.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;