"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Investment",
  " Realestate",
  "Social Media",
  "Technology",
  "Finance and Accounting",
  "Marketing and Branding",
  "Operations and Supply Chain Management",
  "Human Resources",
  "Strategy and Business Development",
  "Entrepreneurship and Startups",
  "Business Law and Compliance",
  "International Business and Global Expansion",
  "Leadership and Organizational Development",
  "Information Technology and Digital Transformation",
];

function getStyles(
  name: string,
  expertFileds: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      expertFileds.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectChip({
  expertData,
  setExpertData,
}: {
  expertData: any;
  setExpertData: any;
}) {
  const theme = useTheme();
  const [expertFileds, setexpertFileds] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof expertFileds>) => {
    const {
      target: { value },
    } = event;
    setexpertFileds(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    setExpertData({
      ...expertData,
      catagories: expertFileds,
    });
  }, [expertData, expertFileds, setExpertData]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: "90%" }}>
        <InputLabel id="demo-multiple-chip-label">Field</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={expertFileds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }} >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, expertFileds, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectChip;
