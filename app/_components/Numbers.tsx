export default function Numbers() {
  return (
    <section id="about" data-screen-label="03 Numbers">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>By the numbers.</h2>
          <div className="right">A decade of shipping. All public, all checkable.</div>
        </div>
        <div className="nums reveal">
          <div className="num-tile">
            <div className="n" data-count="180">0</div>
            <div className="l">Products shipped since 2014</div>
          </div>
          <div className="num-tile">
            <div className="n" data-count="14">0</div>
            <div className="l">Countries served from Kathmandu</div>
          </div>
          <div className="num-tile">
            <div className="n" data-count="98" data-suffix="%">0%</div>
            <div className="l">Client retention, four years running</div>
          </div>
          <div className="num-tile">
            <div className="n" data-count="42">0</div>
            <div className="l">Active engagements this quarter</div>
          </div>
        </div>
      </div>
    </section>
  )
}
