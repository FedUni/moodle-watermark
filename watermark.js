/*
Copyright (c) 2021, Cameron Foale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!(function(attr) {
    var e = document.querySelector("[data-" + attr + "]");
    if (e) {
      var watermark = btoa(e.dataset[d]) + "." + e.dataset[d];
      var p = document.currentScript.parentElement.parentElement;
      var d = document.createElement('div');
      
      d.setAttribute('aria-hidden', true);
      d.style.fontSize = '9px';
      d.style.opacity = '0.6';
      d.textContent = watermark;
      var svg = '<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">' +
        '<text transform="rotate(-30, 125, 75)" text-anchor="middle" font-family="sans-serif" font-size="27" ' +
        'y="91" x="150" stroke-width="0" stroke="#000" opacity="0.05">' + watermark + '</text></svg>';

      p.appendChild(d);
      p.style.background = "url('data:image/svg+xml;base64," + btoa(svg) + "')";

    }
  })('userid');
