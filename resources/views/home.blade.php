@extends('default.layout')
@section('content')
    <div class="menu text-center">
        <i class="icofont icofont-ui-password"></i>
        <div class="a">
            <div class="password" id="result">Sua senha será gerada aqui!</div>
        </div>
            <button type="button" class="btn btn-success" id="generate">Gerar nova senha</button>
        <div class="options">
            <div class="form-check">
                <label class="form-check-label" for="length">Tamanho da senha: </label>
                <input type="number" id="length" value="20">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="lowerCase" checked>
                <label class="form-check-label" for="lowerCase">Carácteres em caixa baixa</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="upperCase" checked>
                <label class="form-check-label" for="upperCase">Caractéres em caixa alta</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="symbols" checked>
                <label class="form-check-label" for="symbols">Símbolos</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="numbers" checked>
                <label class="form-check-label" for="numbers">Números</label>
            </div>
        </div>

    </div>


@endsection
