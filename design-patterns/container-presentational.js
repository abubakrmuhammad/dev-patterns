// CONTAINER/PRESENTATIONAL PATTERN
// Enforce separation of concerns by separating the view from the application logic

({
  plugins: ["jsdom-quokka-plugin"]
})

class Container {
  constructor() {
    this.data = [];
  }

  getData() {
    this.data = [1, 2, 3];
  }
}

class Presentor {
  constructor(props) {
    this.props = props;
  }

  render() {
    const p = document.createElement('p');
    p.textContent = this.props.join(', ');

    document.documentElement.append(p);
  }
}

const container = new Container();
container.getData();

const presentor = new Presentor(container.data);

presentor.render();