# angular-datatables-page-tracking
>A directive to compliment [l-lin/angular-datatables](https://github.com/l-lin/angular-datatables)

The directive is dependent on the [angular-local-storage](https://github.com/grevory/angular-local-storage) service for page persistence 

**This is the first iteration of this directive and will be improved in the future**


*To do:*
* *Replace with state management*
* *Remove dependencies?*
* *Re-factor*
* *Persist filters*
* *Persist ordering*


##Description
This directive will track the last page accessed of all paginated angular-datatables this directive is applied to throughout your one page solution

Returning back to the pages containing the angular-datatable(s) will automatically page to the last accessed page
###Usage
---
```html
<table id="tableId" datatable="ng" class="table table-bordered table-striped" dt-page-track>
...
</table>
```
**An id is required for the table**