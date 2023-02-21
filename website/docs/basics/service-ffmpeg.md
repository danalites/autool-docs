---
id: service-ffmpeg
title: Format converter
---

:::info
If you are running this example locally, you need to install [Docker](https://www.docker.com/products/docker-desktop) and make sure docker daemon is running.
:::

In this example, we run a minimal format converter service inside a docker container, and use AuTool script to interact with it. AuTool script is used to wrap the docker container and provide a simple graphic interface to the user.

### Prepare docker image
> source: https://www.kunxi.org/2020/08/automate-video-to-gif-conversion-in-macos/#fn-2

```bash
docker pull jrottenberg/ffmpeg:4.1-alpine
```

### MOV to GIF

```bash
export filter="fps=12,scale='min(720,iw)':-1:flags=lanczos"
export filter="fps=12,scale='min(480,iw)':-1:flags=lanczos"

docker run --rm -v $(pwd):/workdir -w /workdir jrottenberg/ffmpeg:4.1-alpine -i "${basename}.mov" -vf "${filter},palettegen" -y palette.png

docker run --rm -v ${cwd}:/workdir -w /workdir rottenberg/ffmpeg:4.1-alpine -i "${basename}.mov" -i palette.png -lavfi "${filter} [x]; [x][1:v] paletteuse" -y "${name}.gif"
```

