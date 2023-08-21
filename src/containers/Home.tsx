/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { FormControlLabel, Stack } from "@mui/material";
import { useState } from "react";

import Switch from "../components/Switch";
import { ISelectOption } from "../types/app.type";

export interface ISwitchOption extends ISelectOption {
  checked?: boolean;
}

const fields: ISelectOption[] = [
  {
    value: "none",
    label: "Aucune"
  },
  {
    value: "okr",
    label: "Objectif"
  },
  {
    value: "driver",
    label: "Drivers & Impact"
  },
  {
    value: "owner",
    label: "Owner"
  },
  {
    value: "leader",
    label: "Leader"
  },
  {
    value: "team",
    label: "Equipe"
  },
  {
    value: "role",
    label: "Rôle"
  },
  {
    value: "user",
    label: "User"
  },
  {
    value: "product",
    label: "Produit"
  },
  {
    value: "problematic",
    label: "Problématique"
  },
  {
    value: "feature",
    label: "Feature"
  },
  {
    value: "type",
    label: "Deadline"
  },
  {
    value: "dependentSubject",
    label: "Sujet avec dépendance"
  },
  {
    value: "confiance",
    label: "Confiance"
  }
];

const classes = {
  formControl: (theme: Theme) => ({
    "&.MuiFormControlLabel-root": {
      marginLeft: 0,
      marginRight: 0
    },
    "& .MuiSwitch-root ": {
      order: 2
    },
    "& .MuiFormControlLabel-label": {
      color: theme.palette.grey[800],
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 400
    }
  })
};

const places = [
  {
    name: "Tiks",
    number: 1,
  },
  {
    name: "John",
    number: 2,
  }
]

const banquettes = [3, 4, 3, 3, 3, 3, 4];
const fillPlaces = (count: number, places = []) => {
  // const allPlaces = [...places]
  const remaingPlacesCount = count - places.length;
  const emptyPlaces = new Array(remaingPlacesCount).fill(0);
  // const allPlaces = [...places, ...emptyPlaces];
  const newEmptyPlaces = []
  // allPlaces.forEach((place, index) => {
  //   const number = typeof place.number === 'number' ? place.number : index
  //   newEmptyPlaces.push({ ...place, number })
  // })

  emptyPlaces.forEach((_, index) => {
    const number = places.length + 1 + index
    newEmptyPlaces.push({ number })
  })

  const allPlaces = [...places, ...newEmptyPlaces];
  const formattedAllPlaces = []
  const maxBanquetteCount = 4
  const banquetteCount = 3;
  // allPlaces.forEach((place, index) => {
  //   const placesPerBanquette = []
  //   for (const banquette of banquettes) {
  //     if (place.number >= index && place.number < banquette) {
  //       placesPerBanquette.push(place)
  //     }
  //   }
  //   formattedAllPlaces.push(placesPerBanquette)
  //   // if (place.number >= 0 && place.number <= banquetteCount) {
  //   //   if (formattedAllPlaces[0]) {
  //   //     formattedAllPlaces[0].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[0] = [place]
  //   //   }
  //   // } else if (place.number >= maxBanquetteCount && place.number < maxBanquetteCount * 2) {
  //   //   if (formattedAllPlaces[1]) {
  //   //     formattedAllPlaces[1].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[1] = [place]
  //   //   }
  //   // } else {
  //   //   if (formattedAllPlaces[index + 1]) {
  //   //     formattedAllPlaces[index + 1].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[index + 1] = [place]
  //   //   }
  //   // }
  // })
  // banquettes.forEach((banquette, bIndex) => {
  //   const placesPerBanquette = []
  //   const bqs = new Array(banquette).fill(0);
  //   // bqs.forEach((_, index) => {
  //   //   if (place.number >= bIndex && place.number < banquette + 1) {
  //   //     placesPerBanquette.push(place)
  //   //   }
  //   // })
  //   // allPlaces.forEach((place, index) => {
  //   //   if (place.number >= bIndex && place.number < banquette + 1) {
  //   //     placesPerBanquette.push(place)
  //   //   }
  //   // })
  //   formattedAllPlaces.push(placesPerBanquette)
  //   // if (place.number >= 0 && place.number <= banquetteCount) {
  //   //   if (formattedAllPlaces[0]) {
  //   //     formattedAllPlaces[0].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[0] = [place]
  //   //   }
  //   // } else if (place.number >= maxBanquetteCount && place.number < maxBanquetteCount * 2) {
  //   //   if (formattedAllPlaces[1]) {
  //   //     formattedAllPlaces[1].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[1] = [place]
  //   //   }
  //   // } else {
  //   //   if (formattedAllPlaces[index + 1]) {
  //   //     formattedAllPlaces[index + 1].push(place)
  //   //   } else {
  //   //     formattedAllPlaces[index + 1] = [place]
  //   //   }
  //   // }
  // })
    // formattedAllPlaces.push()


  // console.log('formattedAllPlaces', formattedAllPlaces)

  return allPlaces
}


console.log('fillPlaces', fillPlaces(25, places))
const Home = () => {
  const [options, setOptions] = useState<ISwitchOption[]>(
    fields.map(
      (field: ISelectOption): ISwitchOption => ({ ...field, checked: false })
    )
  );

  const allPlaces = fillPlaces(25, places)
      // console.log('allPlaces', allPlaces)

  return (
    <div className="flexCenter" >
      <div className="flexCenter red" css={{ minWidth: 400 }}>
        {allPlaces.map((place, index) => (
          <div key={index}>
            <div>
              {place.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
