import React from 'react';

export const CreatePage = () => {
  return (
    <div className="row">
      <div className="col s8 offset-s2" id="create-page">
        <h1>Create Task</h1>
        <div className="input-field">
          <input
            placeholder="Input title"
            id="task-title"
            type="text"
            name="task-title"
          />
          <label htmlFor="task-title">Title</label>
        </div>
        <div className="input-field">
          <textarea
            className="materialize-textarea"
            placeholder="Input content"
            id="task-content"
            type="text"
            name="task-content"
          />
          <label htmlFor="task-content">Content</label>
        </div>
      </div>
    </div>
  )
}