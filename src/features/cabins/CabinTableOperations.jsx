import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'sort by (A-Z)' },
          { value: 'name-desc', label: 'sort by (Z-A)' },
          { value: 'regularPrice-asc', label: 'sort by Price (Low First )' },
          { value: 'regularPrice-desc', label: 'sort by Price (High First )' },
          {
            value: 'maxCapacity-asc',
            label: 'sort by Capacity (Low First )',
          },
          {
            value: 'maxCapacity-desc',
            label: 'sort by Capacity (High First )',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
