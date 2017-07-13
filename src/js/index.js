function renderBuilds(data) {
  let buildBlock;

  const buildTemplate = document.querySelector('.build-template');
  const buildID = `build--${data.build.id}`;

  if (buildElement(buildID)) {
    buildBlock = buildElement(buildID);
  } else {
    buildBlock = buildTemplate.cloneNode(true);
  }

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