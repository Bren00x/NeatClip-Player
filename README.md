# NeatClip-Player
Player for NeatClip.com

## How to install:

### Clip page:
Replace: 
  ```
<div class="container mt-sm-3 clip-container">
<div class="embed-responsive embed-responsive-16by9">
<video id="clip-video" class="clip-video embed-responsive-item" preload="auto" poster="{thumbnail url}" loop controls autoplay>
<source src="{video url}" type="video/mp4">
</video>
</div>
</div>
```
with this:
```
<div class="container mt-sm-3 clip-container">
  <div class="NCPlayer">
    <video poster="{thumbnail url}" src="{video url}" loop></video>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/bren00x/NeatClip-Player@1.0.5/nc-player.js"></script>
</div>
```

### Embed page:
Replace: 
  ```
<div class="container-fluid container-embed">
<div class="embed-responsive embed-responsive-16by9">
<video id="clip-video" class="clip-video embed-responsive-item" preload="auto" loop controls autoplay poster="{thumbnail url}">
<source src="{video url}" type="video/mp4">
</video>
</div>
</div>
```
with this:
```
  <div class="NCPlayer">
    <video poster="{thumbnail url}" src="{video url}" loop></video>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/bren00x/NeatClip-Player@1.0.5/nc-player.js"></script>
```

It will set itself up!
