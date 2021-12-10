const handleChange = (e) => {
  const itemIndex = e.nativeEvent.target.selectedIndex;
  const equippedItem = headwearOptions[itemIndex];
  // Can use selected index to get the correct option element
  // can get value from that option
  // that value is what you will pass to the event handler

  const newLoadout = {
    ...loadout,
    [INVENTORY_SLOT.HELMET]: equippedItem
  };
  setLoadout(newLoadout);
};

const CreateChangeHandler = (INVENTORY_SLOT) => {
  const handleChange = (equippedItem) => {
    const newLoadout = {
      ...loadout,
      [INVENTORY_SLOT]: equippedItem
    };
    setLoadout(newLoadout);
    console.log(loadout);
  };

  return handleChange;
};
