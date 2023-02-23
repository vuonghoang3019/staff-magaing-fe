<template>
    <div class="btn-group col-xs-12 col-md-12 pr-0i">
        <label>result</label>

        <a type="button" class="btn btn-default first" role="button">
            <i class="fas fa-step-backward"></i>
        </a>

        <a type="button" class="btn btn-default" role="button">
            <i class="fas fa-chevron-left"></i>
        </a>

        <input type="number" id="page" step="1" min="1" class="form-control">

        <a class="btn btn-default">/ last</a>

        <a type="button" class="btn btn-default last" role="button">
            <i class="fas fa-chevron-right"></i>
        </a>
    </div>
</template>


<style scoped>
    label {
        margin-right: 10px;
        font-weight: normal;
    }

    a[type='button'] {
        max-width: 35px;
        text-align: left;
    }

    a[disabled='disabled'] i{
        color:#ddd;
    }

    .btn-group {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    input {
        border-radius: 0;
        max-width: 70px;
        margin: 0 -1px;
        z-index: 9;
        text-align: right;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { margin-left: 5px; }

    input + a {
        border-radius: 0;
    }

    .first{
        border-top-left-radius: 3px !important;
        border-bottom-left-radius: 3px !important;
    }
</style>
