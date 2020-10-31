import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';

function descendingComparator(a, b, orderBy) {
  if(a[orderBy] === undefined || b[orderBy] === undefined){
    return 0;
  }
  if (b[orderBy] < a[orderBy]) {
    //B is first
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    //A is first
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useHeadStyles = makeStyles((theme) => ({
  head: {
    width: '100%',
  },
  userHeadEntry: {
    minWidth: '250px',
    display: 'table-cell',
  },
  headEntry: {
    color: 'grey',
    backgroundColor: '#FAFAFA'
  }
}));
function EnhancedTableHead(props) {
  const styles = useHeadStyles();
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  let headCells = [];
  switch(props.type){
    case 'user':
      headCells = [
        { id: 'username', label: 'Username' },
        { id: 'email', label: 'Email' },
        { id: 'dateCreated', label: 'Account Created Date' },
      ]
      break
    case 'order':
      headCells = [
        { id: 'orderNumber', label: 'Order Number' },
        { id: 'customerID', label: 'Customer ID' },
        { id: 'pickupTime', label: 'Pickup Time' },
        { id: 'deliveryTime', label: 'Delivery Time' },
        { id: 'driverName', label: 'Driver Name' },
        { id: 'address', label: 'Customer Address' },
        { id: 'weight', label: 'Order Weight (lb)' },
        { id: 'status', label: 'Order Status' },
      ]
      break
    case 'subscription':
      headCells = [
        { id: 'customerName', label: 'Customer Name' },
        { id: 'subscriptionType', label: 'Subscription Type' },
        { id: 'startDate', label: 'Start Date' },
        { id: 'renewalDate', label: 'Renewal Date'},
        { id: 'maxLbs', label: 'Max Weight (lb)' },
        { id: 'currentLbs', label: 'Current Weight (lb)' },
        { id: 'isActive', label: 'isActive' },
      ]
      break
    default:
      headCells = [
        { id: 'name',  label: 'Dessert (100g serving)' },
        { id: 'calories', label: 'Calories' },
        { id: 'fat', label: 'Fat (g)' },
        { id: 'carbs', label: 'Carbs (g)' },
        { id: 'protein', label: 'Protein (g)' },
      ]
      break
  }
  return (
    <TableHead className={styles.head}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding='default'
            sortDirection={orderBy === headCell.id ? order : false}
            className={props.type==='user' ? styles.userHeadEntry : ''}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={styles.headEntry}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={classes.root}
    >
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {props.option}
      </Typography>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  option: PropTypes.string.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  odd: {
    backgroundColor: '#FAFAFA',
  },
  status: {
    borderRadius: '25px',
    textAlign: 'center',
    padding: '3px',
    color: 'white',
    fontSize: '13px',
  },
  paid: {
    backgroundColor: '#29CC97',
  },
  pending: {
    backgroundColor: '#FFB600',
  },
  active: {
    backgroundColor: '#29CC97',
  },
  inactive: {
    backgroundColor: '#FF5A39'
  },
  // scrollable: {
  //   maxHeight: 750,
  //   overflow: 'auto',
  // },
  visuallyHidden: {
    // border: 0,
    clip: 'rect(0 0 0 0)',
    // height: 1,
    // margin: -1,
    // overflow: 'hidden',
    // padding: 0,
    position: 'absolute',
    // top: 20,
    // width: 1,
  },
}));

export default function DataTable(props) {
  const rows = props.rows;
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(props.filler);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


  const handleType = (type, row, labelId, classes) => {
    switch(type){
      case 'user':
        return (
          <>
            <TableCell component="th" id={labelId} scope="row">
              {row.username}
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.dateCreated.toString()}</TableCell>
          </>
        );
      case 'order':
        return (
          <>
            <TableCell component="th" id={labelId} scope="row" >
              {row.orderNumber}
            </TableCell>
            <TableCell align="left">{row.customerID}</TableCell>
            <TableCell align="left">{row.pickupTime.toString()}</TableCell>
            <TableCell align="left">{row.deliveryTime.toString()}</TableCell>
            <TableCell align="left">{row.driverName}</TableCell>
            <TableCell align="left">{row.address}</TableCell>
            <TableCell align="left">{row.weight}</TableCell>
            <TableCell align="left">
              <div className={`${classes.status} ${row.status === 'Paid' ? classes.paid : classes.pending}`}>
                {row.status.toUpperCase()}
              </div>
            </TableCell>
          </>
        );
      case 'subscription':
        return (
          <>
            <TableCell component="th" id={labelId} scope="row" >
              {row.customerName}
            </TableCell>
            <TableCell align="left">{row.subscriptionType}</TableCell>
            <TableCell align="left">{row.startDate.toString()}</TableCell>
            <TableCell align="left">{row.renewalDate.toString()}</TableCell>
            <TableCell align="left">{row.maxLbs}</TableCell>
            <TableCell align="left">{row.currentLbs}</TableCell>
            <TableCell align="left">
              <div className={`${classes.status} ${row.isActive === 'Active' ? classes.active : classes.inactive}`}>
                {row.isActive.toUpperCase()}
              </div>
            </TableCell>
          </>
        );
      default:
        return (
          <>
          </>
        )
    }
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar option={props.option}/>
        <TableContainer className={classes.scrollable}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              type={props.type}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      key={index}
                      role='none'
                      hover
                      tabIndex={-1}
                      className={index % 2 === 1 ? classes.odd : ''}
                    >
                      {handleType(props.type, row, labelId, classes)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow 
                  style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}