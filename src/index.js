async function run() {
  // Call the function that was exposed in Node.
  const [mitt] = await carlo.loadParams();

  mitt.on(
    '*',
    rpc.handle((type, payload) => {
      console.log(type, payload);
    })
  );

  const data = await env();

  for (const type in data) {
    const div = document.createElement('div');

    div.textContent = `${type}: ${data[type]}`;

    document.body.appendChild(div);
  }
}

document.body.onload = run;
