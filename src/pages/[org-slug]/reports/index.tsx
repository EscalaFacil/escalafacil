import Navbar from "@components/Navbar";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

export default function Reports() {
  const actionOptions = ["Edição em Massa", "Deletar Tudo"];
  const filterOptions = ["Atividades", "Usuários"];

  const { isOpen: isOpenAddModal, toggle: toggleAddModal } = useModal();
  const { isOpen: isOpenEditModal, toggle: toggleEditModal } = useModal();

  const handleOptionSelect = (selectedOption: any) => {
    console.log(`Opção selecionada: ${selectedOption}`);
  };

  return (
    <>
      <Navbar />
      <section className="dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="justify-between space-y-3 p-4">
              <span className="self-center text-3xl font-medium whitespace-nowrap dark:text-white">
                Relatório
              </span>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Gere e Visualize relatórios de perfomance da sua operação.
              </p>
              <form action="#" className="space-y-5">
                <div className="max-w-sm my-2">
                  <label
                    htmlFor="reportType"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tipo de Relatório
                  </label>
                  <select
                    required
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="at">Atividades</option>
                    <option value="us">Usuários</option>
                  </select>
                </div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2 max-w-sm">
                  <div>
                    <label
                      htmlFor="dataInicial"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Data Inicial
                    </label>
                    <input
                      type="date"
                      name="dataInicial"
                      id="dataFinal"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="21/08/2023 08:00"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dataFinal"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Data Final
                    </label>

                    <input
                      type="date"
                      name="dataInicial"
                      id="dataFinal"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="21/08/2023 08:00"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Gerar relatório
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
