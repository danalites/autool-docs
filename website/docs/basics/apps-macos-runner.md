---
id: apps-macos-runner
title: MacOS-Utils
---

[![docs-source](https://img.shields.io/badge/source-MacOS--App--Runner-blue?style=for-the-badge&logo=apple&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

*MacOS-Utils* is a collection of tasks that I use to accelerate my daily workflow. 

## Media
Media-related scripts used to automate the process of creating or editing media files.

### QuickTime screen recorder
*screen-recorder* invokes the MacOS built-in screen recorder. You are supposed to start recording manually (by clicking the record button in the QuickTime window).

When you finish recording, simply **press *Esc* to resume the script**. The script will then send a stop signal to the QuickTime window, and save the file to the specified folder.

### QuickTime audio recorder
*audio-recorder* invokes the MacOS built-in audio recorder, and move it to the center of the screen. You need to start recording audio manually (by clicking the record button in the QuickTime window)


### Screen capturer
*screen-capturer* invokes the MacOS built-in screen capture tool. This script lets you pick from a list of available screen capture options.

For example, you can choose to capture the entire screen, or you can choose to capture a specific window.

### Color picker
Start the built-in MacOS color picker. You can choose the output folder and the file name.

### MOV to GIF
Converts a MOV file to a GIF file. You can choose the output folder and the file name.

## Files
### Open terminal from folder
As MacOS does not provide a shortcut to open a new terminal window from the current folder, I developed this minimal script to do this. 

![](/img/demos/app-runner-open-terminal.gif)

### Upload selected files to github
:::tip
- Please make sure you have git installed on your machine. As the script uses git command to upload the files to github.
:::

*upload-to-github* uploads the selected files to a target github repository. You can select files or folders by dragging them to the AuTool icon in the tray.

The provided script assumes that you have a github token stored in the MacOS keychain. You can also modify the script to use a username and password instead, or upload to other hosting websites like *imgur.com* or *unsplash.com*.

![](/img/demos/app-upload-to-github.gif)

## Settings

### Force shutdown
*force-shutdown* forces your Mac to shutdown in a single click. Sometimes the normal shutdown process can be interrupted by a frozen app, and you need to force shutdown your Mac. This script will invoke some *applescript* command to force shutdown your Mac.

### Mute audio
*mute-audio* mutes the audio on your Mac in a single click. It is useful when you want to quickly mute your Mac without having to go to the system preferences.

Note that in the GIF, the *audio setting* window is just shown for demonstration purposes. The script itself does not need open this window to mute the audio.

![](/img/demos/app-settings-mute-audio.gif)