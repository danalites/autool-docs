---
id: theme
title: Premium Services
sidebar_label: Premium Services
---

We provide a set of cloud services for our premium members. You can access these services through REST APIs inside your AuTool scripts. 

## AI service
### Paddle Text OCR
PaddleOCR is state-of-the-art OCR toolkits based on PaddlePaddle. The OCR

```yaml
task: ocr-from-screen-shoot
actions: 
  # Take a screenshot of the screen
  - key.press(Ctrl+Shift+4)

  # Wait for the screenshot to be saved
  - window.ocr($env[CLIPBOARD]) => $env[CLIPBOARD]
  
```



### ChatGPT Pro

### Stable Diffusion Models

## Web Service

### Cloud task runner
We provide a cloud task runner service for our members. You can use the service to run AuTool scripts in the cloud. The service is free for the first 1000 tasks. After that, you will be charged $0.01 per task.

### VPN service
We provide a VPN service for our members. You can use the VPN to bypass the geo-restriction of a website.

### Free reverse proxy
We provide a free reverse proxy service for our members. You can use the proxy to bypass the geo-restriction of a website.

## Others
### Developer support
We will design and ship custom AuTool scripts to fit your particular needs. Professional support is available for all our members. We will help you with the installation, configuration, and integration of the AuTool script into your project.