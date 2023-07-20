import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/ic";

export function CheckboxList({ sheckedAll, setSheckedAll }) {
  const [checked, setChecked] = React.useState([0]);
  const [list, setList] = React.useState([
    { id: 1, content: "LeapStart commition is 10% of your revenue per monthe" },
    { id: 2, content: "Accept LeapStart polices to protect your rights" },
    {
      id: 3,
      content: "Provide requierd documents that's approve your experties ",
    },
    { id: 4, content: "Commite to your booked sessions " },
  ]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    if (newChecked.length === 5) {
      setSheckedAll(true);
    } else {
      setSheckedAll(false);
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        paddingX: "20px",
        height: 200,
      }}
    >
      {list.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments"></IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId}>{value.content}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default CheckboxList;
