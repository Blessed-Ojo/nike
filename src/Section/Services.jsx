import { services } from "../constants"
import ServicesCard from "../components/ServicesCard"
const Services = () => {
  return (
    <section className="max-contaier flex justify-center flex-wrap gap-9">
      {services.map((services) =>(
        <ServicesCard key ={services.label} {...services}/>
      ))}
    </section>
  )
}

export default Services