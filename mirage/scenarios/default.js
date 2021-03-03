export default function (server) {
  const coach = server.create('coach');

  server.create('user', { coaches: [coach] });
}
