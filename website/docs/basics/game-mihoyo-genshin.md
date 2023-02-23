---
id: game-mihoyo-genshin
title: Mihoyo-Genshin
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

### Push primo redemption code

### Resin refill reminders

### E skill cool down reminders
AuTool will automatically detect the cooldown of your E skill and notify you when it is ready to use.

```yaml
actions:
  - >- 
    window.annotate({{
      'type': 'fixed',
      'items': [
        {'label': 'c1', 'x':100, 'y':200 },
      ]
    }}
    )
  
  # Clear all annotations on the screen
  - >-
    window.annotate({{
      'type': 'clear',
      'items': [ 'c1','c2','c3','c4' ]
    }}
    )
```

### Resources markers
We provide a list of resources markers that you can use to mark the location of resources on the map. AuTool will automatically detect the markers and display the resource name and quantity.

```yaml
actions:
  - >- 
    window.annotate({{
      'type': 'floating',
      'reference': 'cropped-image.png',
      'items': [
        {'label': 'c1', 'x':100, 'y':200 },
      ]
    }}
    )
```

Note that here we use *floating* type of annotation. This means that positions of the markers will change when you zoom in or out the map, or drag the map, so that the markers always indicates the right location. 

![Resource markers](/img/demos/app-mihoyo-genshin-markers.gif)