function renderBuilds(data) {
  const filteredData = filteredBuilds(data);

  if (filteredData) {
    updateView(buildBlock(data), filteredData);
  }
}

function buildBlock(data) {
  if (buildElement(data)) {
    return buildElement(data);
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
  buildBlock.className = `build build--${data.pipeline.slug} build--${data.build.branch} build--${data.build.state}`;
  rootElement().appendChild(buildBlock);
  buildBlock.querySelector('.build__name').innerHTML = data.pipeline.name;
  buildBlock.querySelector('.build__message').innerHTML = data.build.message;
}

function buildElement(data) {
  return document.querySelector(`.build--${data.pipeline.slug}.build--${data.build.branch}`)
}

function rootElement() {
  return document.getElementById('builds');
}