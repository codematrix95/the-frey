import React from "react";

const imageMap = {
  bob: 'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-Homepage-Design.jpg',
  sue: 'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-CTA-Module-Section.jpg',
  jill: 'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-Social-Media-Widget.jpg'
};

const keys = Object.keys(imageMap);

const Objects = () => {
  const [selected, setSelected] = React.useState(keys[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => {
        const currentIndex = keys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div>
      <img src={imageMap[selected]} alt={selected} />
    </div>
  );
};

export default Objects;
