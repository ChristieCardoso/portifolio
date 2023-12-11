import "./Error.scss";

export const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1 className="page_404-Title">404</h1>
      </div>
      <div className="contant_box_404">
        <h3 className="contant-Title">
          Parece que você está perdido
        </h3>
        <p className="contant-Text">A página que você procura não está disponível!</p>
        <a href="/" className="link_404">Voltar para Home</a>
      </div>
    </section>
  )
}

