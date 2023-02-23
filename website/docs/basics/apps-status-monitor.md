---
id: apps-status-monitor
title: Status-Monitor
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

import imageUrl from '/img/demos/app-activity-time-spreadsheet.png'


## Operating System
### App activity time
As MacOS
*app-activity-time* tracks the time spent on each window. It is a super lightweight script that measures your activity time and saves the statistics to a CSV file.

```yaml
task: app-activity-time
actions:
    # Initialize CSV as database
    - db.init(...)

    # Update CSV every time when window changed
    - event.on(__WINDOW_CHANGED__) => $win:
        - db.write(...)
      
```

To visualize the data in CSV, you need to use some other tool like excel or google sheets. And good thing here is that you own your data, which is not stored in any third-party apps, and you can do whatever you want with it.


<p align="center">
    <img src={imageUrl} width="400px" alt="Image alt" />
</p>

In case that you need an off-the-shelf timing spending analysis and visualization tool, you can use [ActivityWatch](https://github.com/ActivityWatch/activitywatch), which is an amazing open-source time tracking tool. 
  

### Switch keyboard according to active app

*auto-switch-keyboard* helps you switch keyboard layout automatically according to the active app. 

### Battery status warning
To keep the lithium battery healthy, you should not charge it to 100%, which may cause the battery to degrade faster. The battery should be charged up to 80% and then discharged to 20%. 

[*battery-status-warning*](http://google.com) will push a notification to you when the battery level is below a certain threshold. You can set the threshold in the script.

:::info
This script will only work on MacOS.
:::


## Web
### Monitor product restock
This script will monitor the website for updates. It will send a notification to your phone when the website is updated.

```yaml
 task: monitor-rtx-4090-restock
 actions:
   - web.http(GET, https://www.bestbuy.com/api/3.0/priceBlocks?skus=6521430) => $resp
   - data.eval( {{ $resp[0][buttonState][1] }} ) => $status
   
   - cmd.if( {{ $status != 'SOLD_OUT' }} ):   
      - user.notify($env[MY_IPHONE], {{ {
          'title':'RTX 4090 Restocked', 
          'content':"https://www.bestbuy.com/site/6521430.p"} }})
```

### Track purchase and delivery status

AuTool script only extracts the data from the website and saves it into a CSV file. You can use the CSV file to visualize the data in excel or google sheets.


:::tip Install bark app
Note that these scripts are not executed on iPhones. These scripts are executed on desktop or remote servers, and send notifications to your iPhone.
:::

To receive notifications on your iPhone, you need to install the [bark](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865) app on your iPhone, which is a free and open-source notification app. You can also use other notification apps, such as [pushover](https://pushover.net/), [ifttt](https://ifttt.com/), [pushbullet](https://www.pushbullet.com/), etc. I personally use bark because it is free and open-sourced.

<details>

<summary>Please keep your key confidential</summary>

People can use your key to send notifications to your phone. Please keep your key confidential.

</details>

## Notification
### Weather alerts
This is a script that sends weather alerts to your iPhone. It uses the [pushover](https://pushover.net/) service to send notifications to your iPhone.

### Task 
