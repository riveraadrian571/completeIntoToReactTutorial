const ce = React.createElement;

const myTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
    //this could work as well, it will just not apply the h1 style
    //React.createElement('anyDiv', null, 'my second componenet')
  );
};

const myFirstComponent = function() {
  //second arguement can be null or the below, which can been in the console
  return ce(
    'div',
    { id: 'my-First-Component' },
    //can be an array of components as well
    ce(myTitle, { title: 'fav1', color: 'YellowGreen' }),
    ce(myTitle, { title: 'fav2', color: 'GreenYellow' }),
    ce(myTitle, { title: 'fav3', color: 'LimeGreen' }),
    ce(myTitle, { title: 'fav4', color: 'peru' })
  );
};

ReactDOM.render(ce(myFirstComponent), document.getElementById('app'));
