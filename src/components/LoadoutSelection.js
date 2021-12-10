import { ItemSelect } from "./ItemSelect";

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

function LoadoutSelection() {
  return (
    <>
      <ItemSelect id="helmet" label="Helmet" options={headwearOptions} />
      <ItemSelect id="earpiece" label="Earpiece" options={earpieceOptions} />
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
      <ItemSelect id="scabbard" label="Scabbard" options={scabbardOptions} />
    </>
  );
}
export { LoadoutSelection };
