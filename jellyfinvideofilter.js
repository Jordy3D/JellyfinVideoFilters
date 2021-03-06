javascript: if (document.getElementById("baneFilter")) document.getElementById("baneFilter").remove();
    else {
        var isOpen = false;
        var brightness = function(value) {
                document.documentElement.style.setProperty('--brightness', value);
            },
            saturation = function(value) {
                document.documentElement.style.setProperty('--saturation', value);
            },
            blurt = function(value) {
                document.documentElement.style.setProperty('--blur', value + "px");
            },
            contrast = function(value) {
                document.documentElement.style.setProperty('--contrast', value);
            },
            grayscale = function(value) {
                document.documentElement.style.setProperty('--grayscale', value);
            },
            hue = function(value) {
                document.documentElement.style.setProperty('--hue', value + "deg");
            },
            resetDefault = function() {
                brightness(1);
                document.getElementById('brightness').value = 1;
                saturation(1);
                document.getElementById('saturation').value = 1;
                blurt(0);
                document.getElementById('blur').value = 0;
                contrast(1);
                document.getElementById('contrast').value = 1;
                grayscale(0);
                document.getElementById('grayscale').value = 0;
                hue(0);
                document.getElementById('hue').value = 0;
            },
            openFilterMenu = function() {
                isOpen = !isOpen;
                document.getElementById('filterContent').style.display = isOpen ? "flow-root" : "none";
            },
            button_to_insert, container_block, menu_to_insert;
        var parent = document.getElementsByClassName('buttons focuscontainer-x')[0];
        button_to_insert = document.createElement("div");
        button_to_insert.id = "baneFilter";
        button_to_insert.innerHTML = '<style>:root{--brightness:1.2;--saturation:1;--blur:0px;--contrast:1;--grayscale:0;--hue:0deg;}.filterHeader{font-family:NotoSans,sans-serif;}.filterContent{top:50px;left:0;position:absolute;z-index:100000;background:#2e2e2f;width:fit-content;height:auto;max-width:300px;display:grid;padding:5px;border-radius:5px;}.filter{display:flex;}.filter label{flex:1;}input[type="range"]{z-index:2000000;}label{color:#ccc;font-family:NotoSans,sans-serif;}.htmlvideoplayer{filter:brightness(var(--brightness))saturate(var(--saturation))blur(var(--blur))contrast(var(--contrast))grayscale(var(--grayscale))hue-rotate(var(--hue));}.largePaperIconButton.material-icons.filters::before{content:"\\e3db";}.block{height:200px;width:200px;background:url("https://picsum.photos/200/300");}.block{filter:brightness(var(--brightness))saturate(var(--saturation))blur(var(--blur))contrast(var(--contrast))grayscale(var(--grayscale))hue-rotate(var(--hue));}</style><button is="paper-icon-button-light" class="btnVideoOsdFilters autoSize paper-icon-button-light" title="Filters" onclick="openFilterMenu()"><span class="largePaperIconButton material-icons filters"></span></button><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
        parent.appendChild(button_to_insert);
        menu_to_insert = document.createElement("div");
        menu_to_insert.id = "baneFilter";
        menu_to_insert.innerHTML = '<div class="filterContent" id="filterContent" style="display: none;"><div class="filterHeader" style="display: flow-root;"><span style=color:#ee4444;text-decoration:none;float:right;font-weight:bolder;cursor:pointer; onClick=resetDefault(); href=# title="Reset Values">RESET</span></div><div class="filterContainer"><div class="filter"><label for="brightness">Brightness:</label><input type="range" oninput="brightness(this.value)" id="brightness" name="brightness" min="0" max="2" step=".05" value="1"></div><div class="filter"><label for="saturation">Saturation:</label><input type="range" oninput="saturation(this.value)" id="saturation" name="saturation" min="0" max="2" step=".05" value="1"></div><div class="filter"><label for="blur">Blur:</label><input type="range" oninput="blurt(this.value)" id="blur" name="blur" min="0" max="20" step=".1" value="0"></div><div class="filter"><label for="contrast">Contrast:</label><input type="range" oninput="contrast(this.value)" id="contrast" name="contrast" min="0" max="2" step=".05" value="1"></div><div class="filter"><label for="grayscale">Grayscale:</label><input type="range" oninput="grayscale(this.value)" id="grayscale" name="grayscale" min="0" max="1" step=".05" value="0"></div><div class="filter"><label for="hue">Hue Shift:</label><input type="range" oninput="hue(this.value)" id="hue" name="hue" min="-180" max="180" step="1" value="0deg"></div></div></div><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
        container_block = document.getElementsByTagName("body")[0];
        container_block.appendChild(menu_to_insert);
    }
