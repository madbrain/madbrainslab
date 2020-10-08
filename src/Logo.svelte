<script>
    import { onMount } from 'svelte';

    const MAX_BUBBLES = 20;
    const BRAIN_MOVE = 3;

    let bubbles = [];
    let angle = 0;
    let brainOffset = 0;
    let eyesOffset = {x: 0, y: 0};
    let eyesMove = 0;
    let eyesDirection = 0;

    onMount(() => {

        const timerId = setInterval(() => {
            
            brainOffset = BRAIN_MOVE * Math.sin(angle);
            angle = (angle + Math.PI / 18) % (2 * Math.PI);

            if (bubbles.length < MAX_BUBBLES) {
                bubbles.push({x: Math.random() * 120, y: Math.random() * 20});
            }
            bubbles = bubbles.map(bubble => {
                if (bubble.y > 100) {
                    return {x: Math.random() * 120, y: Math.random() * 20};
                } else {
                    return { ...bubble, y: bubble.y + 6 };
                }
            });
            if (eyesMove == 0) {
                if (Math.random() < 0.05) {
                    eyesDirection = 1 + Math.floor(Math.random()*4);
                    eyesMove = 1;
                }
            } else {
                if (eyesMove == 24) {
                    eyesMove = -1;
                } else if (eyesMove == 20) {
                    if (eyesDirection == 1) {
                        eyesDirection = 2;
                    } else if (eyesDirection == 2) {
                        eyesDirection = 1;
                    } else if (eyesDirection == 3) {
                        eyesDirection = 4;
                    } else if (eyesDirection == 4) {
                        eyesDirection = 3
                    } 
                } else if (eyesMove < 4  || eyesMove > 20) {
                    if (eyesDirection == 1) {
                        eyesOffset = { x: eyesOffset.x + 1, y: eyesOffset.y}
                    } else if (eyesDirection == 2) {
                        eyesOffset = { x: eyesOffset.x - 1, y: eyesOffset.y}
                    } else if (eyesDirection == 3) {
                        eyesOffset = { x: eyesOffset.x, y: eyesOffset.y + 1}
                    } else if (eyesDirection == 4) {
                        eyesOffset = { x: eyesOffset.x, y: eyesOffset.y - 1}
                    }
                }
                eyesMove += 1;
            }

        }, 100);
        return () => {
            clearInterval(timerId);
        }
    });
</script>

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="400px"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"
   sodipodi:docname="logo.svg">
  <defs
     id="defs2" />
  <g
     inkscape:label="Becher"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:#d7eef9;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 183.62085,54.799753 c -3.59077,10.205356 -3.57426,11.606961 -3.70419,19.688928 -0.12993,8.08198 0.33073,113.291669 0.47248,125.982439 0.0499,4.46463 -3.3073,11.19432 -9.54389,17.72084 -6.2366,6.52653 -22.1816,18.70984 -62.36607,18.70984 -40.184475,0 -62.667175,-15.56306 -64.940817,-18.35641 -2.273642,-2.79335 -9.14253,-7.88445 -9.426004,-18.73573 -0.469362,-17.967 0.36541,-118.961189 0.36541,-125.445179 0,-6.48399 0,-12.84365 -3.716589,-19.709825"
       id="path823-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="czszszszc" />
    <path
       style="fill:#d7eef9;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 183.62085,54.799753 c 0,12.733776 -36.16671,23.434519 -76.35118,23.434519 -40.184488,0 -76.351209,-10.88973 -76.351209,-23.623507 0,-12.733777 36.166721,-22.489579 76.351209,-22.489579 40.18447,10e-7 76.35118,9.94479 76.35118,22.678567 z"
       id="path823"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="sssss" />
    <path
       style="fill:#aac7f3;fill-opacity:1;stroke:#1b57b0;stroke-width:0.5;stroke-miterlimit:2;stroke-dasharray:none;stroke-opacity:1"
       d="m 173.48375,201.98568 c 0.0668,11.39743 -18.72839,28.59892 -63.25601,29.46755 -15.347091,0.29939 -29.530504,-2.73729 -39.944691,-6.05371 -19.801238,-6.30576 -29.12127,-16.06926 -28.989907,-23.01294 1.804069,-11.13013 24.273345,-16.2446 69.469148,-16.2446 45.19579,0 61.18466,4.8472 62.72146,15.8437 z"
       id="path823-3-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cssczc" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="Brain">
    <g
       id="g1028"
       transform="translate(177.64881,{32.883929 + brainOffset})">
      <path
         sodipodi:nodetypes="cccccccccc"
         inkscape:connector-curvature="0"
         id="path824"
         d="m -104.32143,118.50074 c -12.50471,-0.72445 -14.2371,-24.41096 2.83483,-31.561009 5.795632,-11.717262 16.315967,-15.213542 25.513386,-7.654018 14.111111,-4.787699 27.46627,-2.015874 33.261905,8.315475 13.985119,0.503968 18.142856,7.811507 14.74107,18.520832 5.921627,8.18949 9.197421,23.844 -2.267856,27.97024 4.378224,12.5677 -9.764386,19.56026 -21.544644,14.74107 -2.734431,5.3975 -22.958453,2.79651 -29.200667,-0.37476 -8.881869,4.31474 -13.438921,2.74299 -15.400522,-3.02703 -15.875002,3.11831 -23.529022,-26.55282 -7.937502,-26.9308 z"
         style="fill:#f4b8bf;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccc"
         inkscape:connector-curvature="0"
         id="path838"
         d="m -101.4866,86.939731 c 0.22048,4.44122 0.81894,8.031994 7.370529,8.220982 6.047619,-3.275794 10.110864,-1.826885 12.473215,1.511905"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path848"
         d="m -94.116069,95.160713 c -1.165427,4.850697 0.220485,9.701387 2.173362,10.299847"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccscsssccc"
         inkscape:connector-curvature="0"
         id="path850"
         d="m -80.983401,148.45857 c 0,0 17.244601,7.41669 29.397551,0.49973 7.297227,1.64953 10.752276,1.29464 14.544184,-0.12497 9.45144,-3.53843 6.803572,-14.74107 6.803572,-14.74107 0,0 -3.950797,7.94739 -8.211349,10.1881 -2.016324,1.06043 -5.579856,-2.14639 -11.78047,-1.47397 -5.414197,0.58713 -13.378694,5.14782 -17.05067,4.85905 -4.110696,-0.32327 -14.905536,-2.4141 -14.905536,-2.4141 l 1.202718,3.20728 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path832"
         d="m -51.782739,148.83333 c 2.456846,-4.50422 1.039436,-10.23686 -3.590772,-12.00074"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccczsc"
         inkscape:connector-curvature="0"
         id="path850-4"
         d="m -65.673361,122.94191 c 0,0 4.616116,-3.07364 17.771329,2.50425 1.814637,-0.36025 3.835304,-0.86829 5.238269,-4.56949 -2.314631,0.038 -3.358464,1.43335 -8.626304,0.10188 -5.26784,-1.33147 -8.69891,-2.40986 -10.687673,-1.81671 -3.127041,0.93265 -3.695621,3.78007 -3.695621,3.78007 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path846"
         d="m -42.805804,121.61904 c -3.442883,10.11724 -15.302692,-4.13769 -22.867557,1.32292"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path826"
         d="m -42.711309,87.601186 c 4.630208,8.913941 -8.031993,13.103174 -16.536459,6.331106"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path828"
         d="m -27.970239,106.12202 c -5.419843,-8.191513 -13.723133,-8.776856 -14.930059,-1.32292"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="czcccc"
         inkscape:connector-curvature="0"
         id="path850-4-1"
         d="m -110.28194,137.27982 c 2.49986,2.70945 6.76145,3.02904 13.178807,3.36752 6.417353,0.33848 11.882453,5.83678 14.917014,4.604 l 1.202718,3.20728 c 0,0 -12.138842,6.34588 -15.49972,-3.1392 -6.362299,0.61273 -11.374529,-2.97678 -13.798819,-8.0396 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cccc"
         inkscape:connector-curvature="0"
         id="path850-4-3"
         d="m -75.973209,79.28571 5.619853,-1.619671 c 0.226657,4.178376 -0.348494,9.158561 -3.729976,13.336937 0.840023,-3.103947 0.610969,-8.34605 -1.889877,-11.717266 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path840"
         d="m -75.973214,79.285713 c 2.047371,3.244296 3.244296,7.15005 1.889882,11.717263"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cccc"
         inkscape:connector-curvature="0"
         id="path850-4-3-0"
         d="m -84.883429,119.02782 c 3.521446,1.50918 4.904737,-0.58978 5.753488,-5.89598 -0.09604,4.51784 1.010625,11.17384 2.117294,15.29078 -1.420881,-5.53703 -3.643571,-6.93137 -7.870782,-9.3948 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccc"
         inkscape:connector-curvature="0"
         id="path834"
         d="m -80.983406,148.45857 c -2.960144,-5.98569 -1.951537,-18.58597 3.970759,-20.03595 -4.44122,-14.2371 -0.566965,-39.53001 16.441964,-40.443463"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         inkscape:connector-curvature="0"
         id="path842"
         d="m -77.012647,128.42262 c -5.580003,-14.95918 -21.449289,-9.7679 -20.97768,2.26785"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cccc"
         inkscape:connector-curvature="0"
         id="path850-4-3-0-4"
         d="m -30.238095,134.09226 c 3.788716,-1.69806 5.84018,-2.72794 5.753488,-5.89598 -2.189655,0.19699 -3.711137,2.13123 -6.568966,0.59096 z"
         style="fill:#ea7a86;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="ccc"
         inkscape:connector-curvature="0"
         id="path830"
         d="m -30.238094,134.09226 c -1.480407,-8.37847 -6.929564,-18.55234 -12.56771,-12.47322 1.228423,-9.4494 -5.449156,-21.702119 -13.418153,-15.686"
         style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cccccccccc"
         inkscape:connector-curvature="0"
         id="path824-8"
         d="m -104.32143,118.50074 c -12.50471,-0.72445 -14.2371,-24.41096 2.83483,-31.56101 5.79564,-11.71726 16.31597,-15.21354 25.513391,-7.65402 14.11111,-4.787695 27.466269,-2.01587 33.261903,8.31548 13.985121,0.50397 18.142858,7.81151 14.74107,18.52083 5.921629,8.18949 9.197422,23.844 -2.267855,27.97024 4.378225,12.5677 -9.764387,19.56026 -21.544645,14.74107 -2.734429,5.3975 -22.958451,2.79651 -29.200665,-0.37476 -8.881869,4.31474 -13.438919,2.74299 -15.400519,-3.02703 -15.87501,3.11831 -23.52903,-26.55282 -7.93751,-26.9308 z"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <ellipse
         ry="9.0203466"
         rx="7.550364"
         cy="136.70509"
         cx="-93.210251"
         id="path972"
         style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <ellipse
         ry="9.0203466"
         rx="7.5503645"
         cy="137.17282"
         cx="-69.890984"
         id="path972-4"
         style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <circle
         r="2.5390604"
         cx={-93.410698 + eyesOffset.x}
         cy={137.17282 + eyesOffset.y}
         id="path989"
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <circle
         r="2.5390604"
         cx={-70.692787 + eyesOffset.x}
         cy={137.84099 + eyesOffset.y}
         id="path989-4"
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    </g>
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer5"
     inkscape:label="Bubbles">
     {#each bubbles as bubble}
    <circle
       style="fill:#ffffff;fill-opacity:0.52813852;stroke:#a5c3f1;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path1043"
       cx={47.730221 + bubble.x}
       cy={202.47501 - bubble.y}
       r="1.4699825" />
    {/each}
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer3"
     inkscape:label="Water"
     style="display:inline">
    <path
       style="fill:#5e96e8;fill-opacity:0.34199135;stroke:#2766c5;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 176.22075,105.14343 c 0,0 -0.1311,69.83524 0.0106,82.52601 0.0499,4.46463 -0.19177,17.27779 -6.42836,23.80431 -3.95504,4.13891 -10.10083,10.85056 -24.72563,14.86475 -15.12255,4.15081 -22.579,4.8269 -35.80985,4.96054 -40.182427,0.40585 -58.88352,-15.32451 -63.871741,-19.82529 -4.988221,-4.50078 -6.842248,-13.04752 -7.125722,-23.8988 -0.469362,-17.967 -0.01257,-83.11185 -0.01257,-83.11185 1.386567,-25.475604 134.686823,-28.461625 137.963273,0.68033 z"
       id="path823-4-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="csssszccc" />
    <path
       style="fill:#5e96e8;fill-opacity:0.34199135;stroke:#1b57b0;stroke-width:0.5;stroke-miterlimit:2;stroke-dasharray:none;stroke-opacity:1"
       d="m 176.22075,105.14343 c 0.0668,11.39743 -23.13834,21.78701 -67.53233,22.1211 C 64.29444,127.59862 38.057025,115.05872 38.257477,104.4631 38.457929,93.867504 63.35899,84.625972 108.55479,84.625972 c 45.1958,0 67.59914,9.120053 67.66596,20.517458 z"
       id="path823-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="zzzzz" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer4"
     inkscape:label="Shine">
    <path
       style="fill:#e8f5fc;fill-opacity:0.62770565;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 43.297664,75.433561 c 0,0 -2.939965,-0.80181 -2.672695,8.218537 0.267269,9.020348 1.336346,97.352922 1.469981,107.843252 0.133634,10.49033 4.944487,13.29666 4.944487,13.29666 v 0 c 0,0 4.543582,4.00905 4.543582,-6.68173 0,-10.69079 -0.133635,-102.364231 0,-110.649588 0.133634,-8.285357 -2.939965,-9.75534 -2.939965,-9.75534 z"
       id="path952"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="czzcczzcc" />
  </g>
</svg>
