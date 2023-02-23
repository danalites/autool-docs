---
id: intro-hello-world-script
title: Hello World Script
sidebar_label: Hello World Script
---
import imageUrl from '/img/tutorial-edit-task.png'

Let's create a new AuTool script by yourself! 

In this tutorial, we will create a simple app launcher script. It will ask you which action you want to perform, and then execute the action you choose. In this hello world example, the actions are defined as:

- Open chrome in incognito mode
- Split screen (put VS Code on the left, and Chrome on the right)

The actions can be anything, like opening a website, or opening an app with custom settings. You can change this script later to fit your own needs.

:::tip
- We recommend you to use [Microsoft VSCode](https://code.visualstudio.com/) to edit AuTool script files to get best experience.

- To edit a script file, simply right-click the script file in the AuTool tray, and select *Edit*. The script file will then be opened in VSCode.
<p align="center">
    <img src={imageUrl} width="400px" alt="Image alt" />
</p>
:::

### Script Skeleton
An AuTool script is basically a YAML file with some required fields. Specifically, a script file contains the following fields:

- *task* (required): the name of the task. 
- *configs* (optional): how the task should be executed (e.g., hotkey, start time, etc.)
- *actions* (required): the actions to perform.

Here follows a hello world script skeleton, which prints "Hello World!" in the console.

```yaml
task: app-launcher

configs:
    # if you want to trigger it by hotkey
    hotkey: Ctrl+Shift+L

    # If you want to run later
    start-time: 2021-01-01 00:00:00

# The actions to perform
actions:
    - cmd.print(Hello World!)
```

### Actions and Primitives

The first thing we need to get user input, i.e., which action to perform. To do that, we can use the *user.input* primitive. 

It will ask the user to input a string, and then save the input to a variable. Here we specify that we want the user to select one of option from the list, and save the input to the return variable (i.e., *$action*).

```yaml
task: app-launcher
configs:
    ...

actions:
    # Note: '>-' is used to write a multi-line string
    - >- 
        user.input({{ 
          {
            'type': 'select',
            'options': ['chrome-incognito', 'split-screen'],
            'max': 1
          }
        }}) => $action
```

For the next step, we need to execute different actions based on the user input. To do that, we can use the *cmd.if* primitive.

```yaml
actions:
    - user.input(...) => $action

    # Run "open" command to start chrome incognito
    - cmd.if( {{ $action == 'chrome-incognito' }} ):
        - os.shell('open -a "Google Chrome" --args --incognito')
    
    - cmd.if( {{ $action == 'split-screen' }} ):

        # Activate VS Code and move the mouse to the top left corner
        - os.shell(osascript -e 'activate app "Visual Studio Code"')
        - window.is(Visual Studio Code):
            - mouse.move({{ (69,23) }})
            - cmd.sleep(1s)

            # Select "Tile Window to Left of Screen"
            - key.press(Down+Down+Enter)
        