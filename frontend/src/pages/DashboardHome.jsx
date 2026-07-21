import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { TASKS } from '../nav.js'

function ContractSearch() {
  return (
    <section className="panel" aria-labelledby="contract-search-title">
      <div className="panel-head">
        <h2 id="contract-search-title">Contract Search</h2>
        <Link to="/search/advanced">Advanced Search</Link>
      </div>
      <form className="panel-body" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Unit, name, contract, or phone"
          aria-label="Search contracts"
        />
        <button type="submit" className="btn-search" aria-label="Search">
          <Icon name="search" size={15} />
        </button>
      </form>
    </section>
  )
}

function CommonTasks() {
  return (
    <section className="tasks">
      <h2 className="section-title">Common Tasks</h2>
      <div className="task-grid">
        {TASKS.map((t) => (
          <Link key={t.path} to={t.path} className="task">
            <Icon name={t.icon} size={15} />
            <span>{t.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function DashboardHome() {
  return (
    <>
      <ContractSearch />
      <hr className="divider" />
      <CommonTasks />
    </>
  )
}
