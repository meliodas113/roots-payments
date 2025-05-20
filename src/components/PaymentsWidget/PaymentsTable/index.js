import React, { useState } from "react";
import "./styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiSort } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useFetchPayments } from "../../hooks/useFetchPayments";
import { CustomLabel } from "../../common/CustomLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const STATUS_CODES = {
  settled: {
    text: "Completed",
  },
  pending: {
    text: "Pending",
  },
  processing: {
    text: "Pending",
  },
  rejected: {
    text: "Failed",
  },
};

export const PaymentsTable = () => {
  const { data, loading, error } = useFetchPayments();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredData = data.filter((el) => {
    const matchesSearch = el.payee_name
      .toLowerCase()
      .includes(value.toLowerCase());
    const matchesStatus =
      selectedStatus === "" || el.verification_status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="TableContainer">
      <div className="TableActionContainer">
        <input
          type="text"
          id="text-input"
          value={value}
          onChange={handleChange}
          placeholder="Search Payouts..."
        />
        <div className="StatusFilterButton" onClick={handleClick}>
          Status <IoIosAddCircleOutline />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F8F8FA" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "#5D7189",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Payee <BiSort />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#5D7189" }}
              >
                Payment Method
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontWeight: "bold",
                  color: "#5D7189",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Amount <BiSort />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#5D7189" }}
              >
                Description
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#5D7189" }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#5D7189" }}
              >
                Created At
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((el) => (
              <TableRow
                key={el.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  fontWeight: "bold",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  component="th"
                  scope="row"
                >
                  {el.payee_name}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  {el.payment_method}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  align="left"
                >
                  {el.amount}
                  {el.currency_code}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  {"Description"}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  <CustomLabel
                    text={STATUS_CODES[el.verification_status].text}
                    style={el.verification_status}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  {formatDate(el.created_at)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setSelectedStatus(""); // use actual status key used in your data
            handleClose();
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedStatus("settled"); // use actual status key used in your data
            handleClose();
          }}
        >
          Completed
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedStatus("pending"); // use actual status key used in your data
            handleClose();
          }}
        >
          Pending
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedStatus("rejected"); // use actual status key used in your data
            handleClose();
          }}
        >
          Failed
        </MenuItem>
      </Menu>
    </div>
  );
};
