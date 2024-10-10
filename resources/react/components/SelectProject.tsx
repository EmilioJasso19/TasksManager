import {getTasks} from "../utils";
import React from "react";

function SelectProject({projectId, projects, setProjectId, setTasks}: any) {
    const selectProject = (e: any) => {
        const value = e.target.value;
        setProjectId(value);
        if (value === '') {
            setTasks([]);
        } else {
            getTasks(value).then((tasksData) => setTasks(tasksData));
        }
    };

    return (
        <div className="projects">
            <select className="projects-select"
                    value={projectId}
                    onChange={selectProject}>
                <option value="" >Choose a project</option>
                {projects.map((project: any) => (
                    <option key={project.id}
                            value={project.id}>{project.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectProject;
