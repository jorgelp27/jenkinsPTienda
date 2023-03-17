// import { createTheme } from '@mui/material/styles';


// export const lightTheme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#1E1E1E'
//         },
//         secondary: {
//             main: '#3A64D8'
//         },
//         info: {
//             main: '#fff'
//         }
//     },
//     components: {
//         MuiLink: {
//           defaultProps: {
//             underline: 'none',
//           },
//         },
//         MuiAppBar: {
//           defaultProps: {
//             elevation: 0,
//             position: 'fixed',
//           },
//           styleOverrides: {
//             root: {
//               backgroundColor: 'black',
//               height: 60
//             },
//           }
//         }
//     }
// })



import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#3A64D8'
    },
    info: {
      main: '#fff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:`
        body {
          background-image: url('/Fotohome.png');
          background-size: cover;
        }
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          fontWeight: 'bold',
          fontSize: 16,
          padding: '12px 32px',
          textTransform: 'uppercase'
        },
        containedPrimary: {
          backgroundColor: '#3A64D8',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1E1E1E'
          }
        },
        outlinedPrimary: {
          borderColor: '#3A64D8',
          color: '#3A64D8',
          '&:hover': {
            backgroundColor: '#3A64D8',
            color: '#fff'
          }
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
          minWidth: 650,
          marginTop: 24
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#1E1E1E',
          color: '#fff',
          fontWeight: 'bold',
          borderBottom: 'none'
        },
        body: {
          borderBottom: '1px solid rgba(224, 224, 224, 1)'
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: {
          color: '#fff'
        },
        active: {
          color: '#fff'
        }
      }
    }
  }
});