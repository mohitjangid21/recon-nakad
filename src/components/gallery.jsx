import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@mui/material";
import { Image } from "./image";

export const Gallery = (props) => {
  function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Balance confirmation Bulk email', '✅', '✅', '✅', '✅'),
  createData('Ledger Request Bulk email','✅', '✅', '✅', '✅'),
  createData('Automated Ledger reconciliation', '❌', '❌', '❌', '❌'),
  createData('Automated Payment advice reconciliation', '❌', '❌', '❌', '✅'),
  createData('Accounts Payable recon insights', '❌', '❌', '❌', '✅'),
  createData('Accounts Receivable recon insights', '❌', '❌', '❌', '✅'),
  createData('Accounts Recon Signoff Report', '❌', '❌', '❌', '✅'),
  createData('Dunning Letter Bulk email', '❌', '❌', '✅', '✅'),
  createData('MSME status update in bulk', '❌', '❌', '✅', '✅'),
  createData('Business Partners Addition ', '50', '500', 'Unlimited', 'Unlimited'),
  createData('Free Integration Included', '❌', '❌', '✅', '✅'),
  createData('Price (INR)', '', '5,000', '10,000', 'Contact Sales'),
  createData('',
  <button className="br_8">Sign in</button>,
  <button className="br_8">Buy Now</button>,
  <button className="br_8">Buy Now</button>,
  <button className="br_8">Buy Now</button>
),
];


  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Pricing</h2>
          <p>
          Choose the plan that suits you, with the flexibility to upgrade anytime.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'} */}
              {/* <BasicTable /> */}
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="fs_20 pricing_header">Features</TableCell>
            <TableCell className="fs_20 pricing_header txt_center">FREE</TableCell>
            <TableCell  className="fs_20 pricing_header txt_center">SILVER</TableCell>
            <TableCell className="fs_20 pricing_header txt_center">GOLD</TableCell>
            <TableCell  className="fs_20 pricing_header txt_center">PLATINUM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="txt-cap">
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="fs_18">
                {row.name}
              </TableCell>
              <TableCell className="fs_18 txt_center">{row.calories}</TableCell>
              <TableCell className="fs_18 txt_center">{row.fat}</TableCell>
              <TableCell className="fs_18 txt_center">{row.carbs}</TableCell>
              <TableCell  className="fs_18 txt_center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}


// annnana


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Gallery