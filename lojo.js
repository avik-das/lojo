domready(function() {
  /* Tweet-Templ - a tweet-sized templating engine by Thomas Fuchs. */
  function t(s,d){
    for(var p in d)
      s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
    return s;
  }

  var numImagesLoaded = 0;

  var HAT;

  var loadSombrero = function() {
    HAT = new Image();
    HAT.onload = function() {
      initDropZone();
    };
    HAT.src = "sombrero.png";
  };

  var showNotImageMsg = function(file, allouts) {
    var outcont = document.createElement('div');
    var tmpl = document.getElementById('tmpl-file-not-image').innerHTML;

    outcont.className = 'image';
    outcont.innerHTML = t(tmpl, {filename: file.name});

    allouts.appendChild(outcont);
  };

  var addOutputProgress = function(tmpl, file, allouts) {
      var outcont = document.createElement('div');

      outcont.className = 'image';
      outcont.innerHTML = t(tmpl, {filename: file.name});

      var bar = outcont.getElementsByClassName('bar')[0];
      bar.style.width = 0;

      allouts.appendChild(outcont);
      return [outcont, bar];
  };

  var updateProgress = function(evt, bar) {
    if (!evt.lengthComputable)
      return;

    var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
    if (percentLoaded < 100)
      bar.style.width = t('{p}%', {p: percentLoaded});
  };

  var clearNode = function(node) {
    while (node.hasChildNodes())
      node.removeChild(node.lastChild);
  };

  var lojoizeImage = function(evt, outcont) {
    var img = new Image();
    img.onload = function() {
      var out = document.createElement('canvas');
      var ctx = out.getContext('2d');

      var imgy;
      var hatx;
      if (img.width >= HAT.width/2) {
        out.width = img.width + HAT.width/2;
        hatx = out.width - HAT.width;
      }
      else {
        out.width = HAT.width;
        hatx = 0;
      }

      if (img.height >= HAT.height/2) {
        out.height = img.height + HAT.height/2;
        imgy = HAT.height/2;
      }
      else {
        out.width = HAT.width;
        imgy = out.height - img.height;
      }

      ctx.drawImage(img, 0, imgy);
      ctx.drawImage(HAT, hatx, 0);

      clearNode(outcont);
      outcont.appendChild(out);

      numImagesLoaded++;
      Tinycon.setBubble(numImagesLoaded);
    };
    img.src = evt.target.result;
  };

  var handleFileDrop = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.className = '';

    var files = evt.dataTransfer.files;

    var allouts = document.getElementById('output');
    var imgtmpl = document.getElementById('tmpl-image-progress').innerHTML;

    for (var fi = 0, file; file = files[fi]; fi++) {
      if (!file.type.match('image.*')) {
        showNotImageMsg(file, allouts);
        continue;
      }

      var [outcont, bar] = addOutputProgress(imgtmpl, file, allouts);

      var reader = new FileReader();
      (function(file, outcont, bar) {
        reader.onload     = function(evt) { lojoizeImage(evt, outcont); }
        reader.onprogress = function(evt) { updateProgress(evt, bar);   }
      })(file, outcont, bar);

      reader.readAsDataURL(file);
    }
  };

  var handleDragOver = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
    this.className = 'dragover';
  };

  var handleDragLeave = function(evt) {
    this.className = '';
  };

  var initDropZone = function() {
    var dropzone = document.getElementById('drop-zone');
    dropzone.addEventListener('dragover', handleDragOver, false);
    dropzone.addEventListener('dragleave', handleDragLeave, false);
    dropzone.addEventListener('drop', handleFileDrop, false);
  }

  loadSombrero();
});
