---
id: intro-user-interface
title: Usage
---

In this section, we will go over the user interface of the app, and how you can use it to manage your tasks.

## App Manager
Navigate to the first icon in the leftmost menu to open the app manager. This is where you can see all the apps that are currently installed on your machine. 

An app is a collection of tasks. In the following screenshot, the *MacOS-Display* app is selected, and we can see several tasks in this app on the right half.

![App Manager](/img/intro-app-manager.png)

### Run tasks
Clicking on a task name will start the task. If you want to configure a task before running it, you can click on the icons next to the task name.

- ![](/img/icons/andriod.svg) whether to autostart the task
- ![](/img/icons/clock.svg) schedule the task to run later
- ![](/img/icons/keyboard.svg) set up a hotkey for the task
- ![](/img/icons/cloud.svg) whether to run the task on a cloud server

![Configure task](/img/intro-configure-task.gif)

### Task bar
For frequently used tasks, you can also check the checkbox next to the task name, and collapse the window by clicking the AuTool rabbit logo. All these selected tasks will be shown in the collapsed task bar, and you can click on the task name to start it from task bar.

![Task bar](/img/intro-task-bar.gif)


### Add new app
To add a new app, click on the + button in the top left corner of the app manager. This will open a new window where you can select the app you want to install.

![Add new apps](/img/intro-add-new-apps.gif)

You can download apps from github links (e.g., https://github.com/danalites/apps/MacOS-Display), or you can create blank app and fill it with custom tasks later.

### Add new task
A task must be created inside an existing app. Select *New Task* in the dropdown menu to create a new task in the currently selected app. You can either create a task from provided templates, or you can record a mouse-keyboard action recording and convert it to a task.

![Add new task](/img/intro-add-new-tasks.gif)


## Task Scheduler

Click the second icon in the leftmost menu to open the task scheduler. This is where you can see all the active task instances, including

- *Active*: currently running tasks
- *Later*: tasks scheduled to run later
- *Hotkey*: tasks waiting to be triggered by hotkey
- *Stopped*: tasks stopped normally or by error 

### Manage hotkeys
When you start a task with a hotkey binding, the task will be shown in the *Hotkey* section of the task scheduler, and it will be waiting for the hotkey to be triggered.

As an example, this *copy-excel-table* task is currently waiting for the hotkey *Ctrl+J* to be triggered. You can click the *Clear* button to remove this hot key binding.

![Task Scheduler](/img/intro-task-scheduler.png)

### Debug scripts
If a task does not work as expected, you can click the *Debug* button to open the debug window. This window will show the output of the task, and you can use this window to debug the task.

