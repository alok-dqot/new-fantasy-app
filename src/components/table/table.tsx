import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

function createData(
    Format: string,
    M: number,
    Inns: number,
    R: number,
    HS: number,
    AVG: number,
    BF: number,
    _100: number,
    _50: number,
) {
    return { Format, M, Inns, R, HS, AVG, BF, _100, _50 };
}



export default function BasicTable() {
    const [tableData, setTableData] = useState() as any
    const API = "https://api.sportswiz.live/score/players/state?player_id=143859";
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setTableData(data)
            }).catch((error) => console.log(error))
    }, [])



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Format </TableCell>
                        <TableCell >M</TableCell>
                        <TableCell >Inns&nbsp;</TableCell>
                        <TableCell >R&nbsp;</TableCell>
                        <TableCell >H.S&nbsp;</TableCell>
                        <TableCell >Avg&nbsp;</TableCell>
                        <TableCell >Bf&nbsp;</TableCell>
                        <TableCell >_100&nbsp;</TableCell>
                        <TableCell >_50&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.bat?.map((row: any) => {
                        console.log(row)
                        return (
                            <TableRow
                                key={row.Format}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.format}
                                </TableCell>
                                <TableCell >{row.matches}</TableCell>
                                <TableCell >{row.innings}</TableCell>
                                <TableCell >{row.runs}</TableCell>
                                <TableCell >{row.highest}</TableCell>
                                <TableCell >{row.average}</TableCell>
                                <TableCell >{row.BF}</TableCell>
                                <TableCell >{row.run100}</TableCell>
                                <TableCell >{row.run50}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
