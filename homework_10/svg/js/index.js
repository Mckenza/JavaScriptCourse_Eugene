const drowCircleButton = document.getElementById('drow_circle');
const drowRectButton = document.getElementById('drow_rect');
const svgElement = document.getElementById('main_svg');
const selectStroke = document.getElementById('stroke_value');
const selectFill = document.getElementById('fill_value');
const drowLineButton = document.getElementById('drow_lines');

const propertyFigure = {
    stroke: false,
    strokeColor: 'black',
    fillColor: 'black',
};

const typeFigure = {
    rect: false,
    circle: false,
    line: false,
};

const coodrsMouse = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
}

function clearObjFigure() {
    for (let value in typeFigure) {
        if (typeFigure[value] === true) {
            typeFigure[value] = false;
        }
    }
}

selectFill.onclick = () => {
    if (selectFill.value === 'transparent') {
        propertyFigure.fillColor = selectFill.value;
        return;
    }
    propertyFigure.fillColor = selectFill.value;
}

selectStroke.onclick = () => {
    if (selectStroke.value === 'notStroke') {
        propertyFigure.stroke = false;
        return;
    }
    propertyFigure.stroke = true;
    propertyFigure.strokeColor = selectStroke.value;
}

drowRectButton.onclick = () => {
    clearObjFigure();
    typeFigure.rect = true;
}

drowCircleButton.onclick = () => {
    clearObjFigure();
    typeFigure.circle = true;
}

drowLineButton.onclick = () => {
    clearObjFigure();
    typeFigure.line = true;
}

svgElement.addEventListener('mousedown', (e) => {
    coodrsMouse.startX = e.offsetX;
    coodrsMouse.startY = e.offsetY;
})

svgElement.addEventListener('mouseup', (e) => {
    coodrsMouse.endX = e.offsetX;
    coodrsMouse.endY = e.offsetY;
    drowRect();
    drowCircle();
    drowLine();
})

function drowRect() {
    if (!typeFigure.rect) {
        return;
    }

    const rectForSvg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    if (coodrsMouse.endX < coodrsMouse.startX) {
        rectForSvg.setAttribute('width', coodrsMouse.startX - coodrsMouse.endX);
        rectForSvg.setAttribute('x', coodrsMouse.endX);
    } else {
        rectForSvg.setAttribute('width', coodrsMouse.endX - coodrsMouse.startX);
        rectForSvg.setAttribute('x', coodrsMouse.startX);
    }

    if (coodrsMouse.endY < coodrsMouse.startY) {
        rectForSvg.setAttribute('height', coodrsMouse.startY - coodrsMouse.endY);
        rectForSvg.setAttribute('y', coodrsMouse.endY);
    } else {
        rectForSvg.setAttribute('height', coodrsMouse.endY - coodrsMouse.startY);
        rectForSvg.setAttribute('y', coodrsMouse.startY);
    }

    rectForSvg.setAttribute('fill', propertyFigure.fillColor);
    if (propertyFigure.stroke) {
        rectForSvg.setAttribute('stroke', propertyFigure.strokeColor);
    } else {
        rectForSvg.removeAttribute('stroke');
    }
    svgElement.appendChild(rectForSvg);
}

function drowCircle() {
    if (!typeFigure.circle) {
        return;
    }

    const distance = Math.sqrt(((coodrsMouse.endX - coodrsMouse.startX) ** 2) + ((coodrsMouse.endY - coodrsMouse.startY) ** 2))

    const circleForSvg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleForSvg.setAttribute('cx', coodrsMouse.startX);
    circleForSvg.setAttribute('cy', coodrsMouse.startY);
    circleForSvg.setAttribute('r', distance);
    circleForSvg.setAttribute('fill', propertyFigure.fillColor);

    if (propertyFigure.stroke) {
        circleForSvg.setAttribute('stroke', propertyFigure.strokeColor);
    } else {
        circleForSvg.removeAttribute('stroke');
    }

    svgElement.appendChild(circleForSvg);
}

function drowLine() {
    if (!typeFigure.line) {
        return;
    }

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', coodrsMouse.startX);
    line.setAttribute('y1', coodrsMouse.startY);
    line.setAttribute('x2', coodrsMouse.endX);
    line.setAttribute('y2', coodrsMouse.endY);
    if (propertyFigure.stroke) {
        line.setAttribute('stroke', propertyFigure.strokeColor);
    } else {
        line.removeAttribute('stroke');
    }

    svgElement.appendChild(line);
}