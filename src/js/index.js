function renderBuilds(data) {
  const filteredData = filteredBuilds(data);

  if (filteredData) {
    updateView(buildBlock(data.build.id), filteredData);
  }
}

function buildBlock(buildID) {
  const buildClassName = `build--${buildID}`;

  if (buildElement(buildClassName)) {
    return buildElement(buildClassName);
  } else {
    return document.querySelector('.build-template').cloneNode(true);
  }
}

function filteredBuilds(data) {
  if (data.build.branch === 'master') {
    return data;
  }
}

function updateView(buildBlock, data) {
  buildBlock.className = `build build--${data.build.id} build--${data.build.state}`;
  rootElement().appendChild(buildBlock);
  buildBlock.querySelector('.build__name').innerHTML = data.pipeline.name;
  buildBlock.querySelector('.build__message').innerHTML = data.build.message;
}

function buildElement(buildID) {
  return document.querySelector(`.${buildID}`)
}

function rootElement() {
  return document.getElementById('builds');
}