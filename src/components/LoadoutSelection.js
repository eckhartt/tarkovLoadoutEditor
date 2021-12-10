// Creates a form providing input fields from ItemSelect for each item slot

import { ItemSelect } from "./ItemSelect";
import React from "react";
import {
  earpieceOptions,
  headwearOptions,
  faceCoverOptions,
  armbandOptions,
  bodyArmorOptions,
  eyewearOptions,
  tacticalRigOptions,
  backpackOptions
} from "./itemOptions";
import {
  primaryWeaponOptions,
  holsterOptions,
  scabbardOptions
} from "./weaponOptions";

// define what can be an inventory slot
// need to add the rest of the slots
const INVENTORY_SLOT = {
  HELMET: "helmet"
};

// define default loadout to be entered in state
// need more items once slots are defined in INVENTORY_SLOT
const defaultLoadout = {
  [INVENTORY_SLOT.HELMET]: {
    name: "None",
    value: "none"
  }
};

function LoadoutSelection() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: setup behaviour to save current input values to state
    // TODO: add options to name a loadout, and save input values under that name
    // TODO: add options to load a loadout by name
    console.log("onSubmit", e.target.helmet.value);
  };

  //setup state
  const [loadout, setLoadout] = React.useState(defaultLoadout);

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

  return (
    <>
      <form onSubmit={onSubmit}>
        <ItemSelect
          id="helmet"
          label="Helmet"
          options={headwearOptions}
          onChange={handleChange}
        />

        {/* <ItemSelect id="earpiece" label="Earpiece" options={earpieceOptions} />
        <ItemSelect
          id="faceCover"
          label="Face Cover"
          options={faceCoverOptions}
        />
        <ItemSelect id="armband" label="Armband" options={armbandOptions} />
        <ItemSelect
          id="bodyarmor"
          label="Body Armor"
          options={bodyArmorOptions}
        />
        <ItemSelect id="eyewear" label="Eyewear" options={eyewearOptions} />
        <ItemSelect
          id="tacticalRig"
          label="Tactical Rig"
          options={tacticalRigOptions}
        />
        <ItemSelect id="backpack" label="Backpack" options={backpackOptions} />
        <br />
        <ItemSelect
          id="primaryWeapon"
          label="Primary Weapon"
          options={primaryWeaponOptions}
        />
        <ItemSelect
          id="secondaryWeapon"
          label="Secondary Weapon"
          options={primaryWeaponOptions}
        />
        <ItemSelect id="sidearm" label="Sidearm" options={holsterOptions} />
        <ItemSelect id="scabbard" label="Scabbard" options={scabbardOptions} /> */}

        <button type="submit">Save</button>
      </form>
    </>
  );
}
export { LoadoutSelection };
