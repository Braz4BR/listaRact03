function Imagem(props) {
  return (
      <img
        src={props.url}
        width={"100px"}
        style={{ borderRadius: "50%", border: "3px solid #000" }}
      />
  );
}

function Imagens() {
  const urls = [
    "https://dynamicmedia.livenationinternational.com/h/y/i/14bee807-cee5-4685-b67a-a039f1a45d04.jpg",
    "https://th.bing.com/th/id/R.b8a9495a6a57f522716189f56d3ebfee?rik=kAErubSN8aVwpw&riu=http%3a%2f%2fwww.technotaku.com%2fblog%2fwp-content%2fuploads%2f2018%2f02%2fbabymetal2018.jpg&ehk=%2bBkFIbQNt67OKQIkJ4ON98Mc7lL316W5IHI93xW%2bw8A%3d&risl=&pid=ImgRaw&r=0",
  ];

  return (
    <div className="fotos">
          {urls.map((urls) => (
            <Imagem url={urls} />
          ))}
    </div>
  );
}

export default Imagens;