CREATE TABLE user_details (
  user_id int PRIMARY KEY,
  username varchar UNIQUE NOT NULL,
  password varchar,
  status int
);


CREATE TABLE workspace (
  workspace_id int PRIMARY KEY,
  workspace_name varchar UNIQUE,
  created_by int NOT NULL,
  decription text,
  CONSTRAINT fk_owner
    FOREIGN KEY (created_by) 
        REFERENCES user_details(user_id)
);


CREATE TABLE task (
  task_id int PRIMARY KEY,
  task_name varchhar UNIQUE NOT NULL,
  workspace_id int NOT NULL,
  created_by int NOT NULL,
  create_date date,
  start_date date NOT NULL,
  end_date date,
  description text,
  assigned_to int,
  CONSTRAINT fk_workspace
    FOREIGN KEY (workspace_id) 
        REFERENCES workspace(workspace_id),
  CONSTRAINT fk_user
    FOREIGN KEY (created_by) 
        REFERENCES user_details(user_id),
  CONSTRAINT fk_user_assigneed
    FOREIGN KEY (assigned_to) 
        REFERENCES user_details(user_id) 
);


CREATE TABLE task_extensios (
  task_extensios_id int PRIMARY KEY,
  task_id int,
  old_start_date date,
  new_start_date date,
  old_end_date date,
  new_end_date date,
  changed_by int,
  reason text,
  CONSTRAINT fk_task
    FOREIGN KEY (task_id) 
        REFERENCES task(task_id),
  CONSTRAINT fk_user_action
    FOREIGN KEY (changed_by) 
        REFERENCES user_details(user_id)
);


CREATE TABLE workspace_user_access (
  workspace_user_access_id int PRIMARY KEY,
  workspace_id int,
  user_id int,
  access_level int,
  permission_granted int,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id) 
        REFERENCES user_details(user_id),
  CONSTRAINT fk_user
    FOREIGN KEY (workspace_id) 
        REFERENCES workspace(workspace_id)

);


CREATE TABLE task_detail (
  task_detail_id int PRIMARY KEY,
  task_id int,
  CONSTRAINT fk_task
    FOREIGN KEY (task_id) 
        REFERENCES task(task_id)
);





