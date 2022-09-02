<!doctype html>
<html lang="pt-br">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Traveller</title>
</head>

<body>

    <header>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="./imagens/logo1.svg" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="ms-auto"></div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Hospedagem</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gastronomia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Alugar Carros</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Mais
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Dicas Úteis</a></li>
                                    <li><a class="dropdown-item" href="#">Como Chegar</a></li>
                                    <li><a class="dropdown-item" href="#">Vida Noturna</a></li>
                                    <li><a class="dropdown-item" href="#">Cultura</a></li>
                                    <li><a class="dropdown-item" href="#">Entretenimento</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="container cabecalho-banner">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">

                    <div class="mold-oval col-lg-7 col-md-7 col-12">
                    </div>

                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">

                    <div class="mold-oval-sec col-lg-7 col-md-7 col-12">
                    </div>

                </div>
                <div class="col-lg-4  col-sm-12 col-12 texto-1">
                    <h1>Bem-Vindo(a)!
                        <img src="./imagens/air-shipping.svg" alt="ícone de um avião" class="icone-aviao">
                    </h1>


                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum sit cumque neque illo quod
                        iusto, optio
                        soluta aliquid. At quo tempore ipsum voluptatum veniam quasi totam laudantium distinctio,
                        provident,
                        consequatur dolorum itaque numquam velit ab cupiditate doloremque amet exercitationem sint modi
                        eius
                        aspernatur id animi iste qui! Voluptates, autem?</p>

                        <button type="button" class="btn btn-outline-secondary botao-login">Login</button>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group mb-3 barra-busca">
                            <input type="search" class="form-control" placeholder="Pesquise algo..."
                                aria-label="Pesquise algo..." aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary botao-busca" type="button"
                                id="button-addon2">Buscar</button>
                        </div>
                    </div>
                </div>
    </header>
    <div class="container-fluid p-0 m-0 waves">
        <div class="row">
            <div class="col-md-12">
                <img src="./imagens/wavesNegative.svg" alt="">
            </div>
        </div>
    </div>
    <main>
        <section class="sec-1 serviços">
            <div class="container text-center">
                <div class="row">
                    <h1>Serviços que oferecemos para você:</h1>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12 icone-servicos">

                        <img src="./imagens/recepcionista.png" alt="">
                        
                        <div class="titulo-servicos col-lg-8 col-8">
                            <h2>Hospedagem</h2>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12 icone-servicos">
                        
                        <img src="./imagens/car.png" alt="">

                        <div class="titulo-servicos col-lg-8 col-8">
                            <h2>Aluguel de Carros</h2>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12 icone-servicos">
                        
                        <img src="./imagens/restaurante.png" alt="">

                        <div class="titulo-servicos col-lg-8 col-8">
                            <h2>Restaurantes</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <section class="sec-2 hospedagens">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="borda-titulo">
                            <h1 class="titulo-hospedagens">Hóteis próximos a você</h1>
                          </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-12 row-cols-lg-12 row-cols-xl-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="./imagens/ibis-style.png" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><script></script></h5>
                            <div class="aval-stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./imagens/renaissence.png" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Renaissance São Paulo Hotel</h5>
                            <div class="aval-stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card ">
                            <img src="./imagens/blue-tree.png" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Blue Tree Premium Morumbi</h5>
                            <div class="aval-stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 informacoes-contato">
                    <h2>  <i class="fa-solid fa-phone"></i>  (11) 9123456789</h2>
                    <h2> <i class="fa-brands fa-instagram-square"></i> @Guillivertraveller</h2>
                    <h2><i class="fa-solid fa-envelope"></i>Guillivertraveller@gmail.com</h2>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <img src="./imagens/virtual-assistant.svg" class="assistant-virtual col-md-9 col-sm-8 col-8" alt="assistente virtual">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-12">
                    <form action="POST" class="formulario-contato">
                        <h1>Contate-nos</h1>
    
                        <input type="e-mail" placeholder="Seu e-mail" class="col-lg-8 col-md-6 col-sm-12 col-12 email">
                  
                        <textarea placeholder="Sua Mensagem" class="col-lg-8 col-md-6 col-sm-12 col-12 mensagem"></textarea>
                        <div class="col-md-12 col-sm-12 col-12">
                            <button type="submit" class="botao-enviar">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <div class="container-fluid p-0 m-0">
            <div class="final-rodape">

            </div>
                    
                </div>
        </div>
    </footer>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>


</body>

</html>