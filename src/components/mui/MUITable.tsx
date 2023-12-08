"use client";
import { CheckBox } from "@mui/icons-material";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
};

const MUITable = (props: Props) => {
  const initProduct = [
    {
      id: 1,
      name: "name 1",
      description: " description 1",
      quantity: 2,
    },
    {
      id: 2,
      name: "name 2",
      description: " description 2",
      quantity: 5,
    },
    {
      id: 3,
      name: "name 3",
      description: " description 3",
      quantity: 6,
    },
  ];

  const [checked, setChecked] = useState<boolean[]>(
    Array.from({ length: initProduct.length }, () => false)
  );
  const [products, setProducts] = useState<Product[]>(initProduct);

  console.log(checked);
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Table
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <CheckBox onChange={(e: any) => console.log(e)} />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">description</TableCell>
                <TableCell align="center">quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, i) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox
                      checked={checked[i]}
                      onChange={(e) =>
                        setChecked((prev) => {
                          const currentState = prev;
                          currentState[i] = e.target.checked;

                          return currentState;
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.description}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MUITable;
