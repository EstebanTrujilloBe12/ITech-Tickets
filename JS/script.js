document.addEventListener("DOMContentLoaded", () => {

    const usuarioInput = document.getElementById("inputUsuario");
    const passwordInput = document.getElementById("inputPassword");
    const btnTogglePassword = document.getElementById("btnTogglePassword");
    const form = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");
    const btnMostrarRegistro = document.getElementById("btnMostrarRegistro");
    const btnVolverLogin = document.getElementById("btnVolverLogin");
    const btnIrLogin = document.getElementById("btnIrLogin");
    const registroNombre = document.getElementById("registroNombre");
    const registroApellidos = document.getElementById("registroApellidos");
    const registroCiudad = document.getElementById("registroCiudad");
    const registroPais = document.getElementById("registroPais");
    const registroCorreo = document.getElementById("registroCorreo");
    const registroNacimiento = document.getElementById("registroNacimiento");
    const registroPassword = document.getElementById("registroPassword");
    const registroConfirmPassword = document.getElementById("registroConfirmPassword");

    const login = document.getElementById("form-login");
    const footerApp = document.getElementById("footerApp");

    const pantallaUsuario = document.getElementById("usuario");
    const pantallaAdmin = document.getElementById("pantalla__admi");
    const pantallaTecnico = document.getElementById("pantalla__tec");
    const nombrePerfilUsuario = document.querySelector("#usuario .perfil h3");
    const nombrePerfilAdmin = document.getElementById("nombrePerfilAdmin");
    const nombrePerfilTecnico = document.getElementById("nombrePerfilTecnico");
    const dashboardTecnico = document.getElementById("dashboardTecnico");
    const ticketsTecnico = document.getElementById("ticketsTecnico");
    const btnDashboardTecnico = document.getElementById("btnDashboardTecnico");
    const btnTicketsTecnico = document.getElementById("btnTicketsTecnico");
    const tablaTicketsTecnicoBody = document.getElementById("tablaTicketsTecnicoBody");
    const tecTicketsAbiertos = document.getElementById("tecTicketsAbiertos");
    const tecTicketsTerminados = document.getElementById("tecTicketsTerminados");
    const tecTicketsProceso = document.getElementById("tecTicketsProceso");
    const tecGananciaTotal = document.getElementById("tecGananciaTotal");
    const tecAporteEmpresa = document.getElementById("tecAporteEmpresa");
    const tecGananciaNeta = document.getElementById("tecGananciaNeta");
    const tecTrabajosPendientes = document.getElementById("tecTrabajosPendientes");
    const tecGraficaIngresos = document.getElementById("tecGraficaIngresos");
    const tecUltimosClientes = document.getElementById("tecUltimosClientes");
    const tecListaPendientes = document.getElementById("tecListaPendientes");
    const tecRepartoIngresos = document.getElementById("tecRepartoIngresos");

    // SECCIONES USUARIO
    const crearTicketUsuario = document.querySelector(".crar-tickets");
    const estadoTicketUsuario = document.getElementById("estadoTicketUsuario");
    const btnCrearTicketUsuario = document.getElementById("btnCrearTicketUsuario");
    const btnEstadoTicketUsuario = document.getElementById("btnEstadoTicketUsuario");
    const formCrearTicketUsuario = document.getElementById("formCrearTicketUsuario");
    const ticketTituloUsuario = document.getElementById("ticketTituloUsuario");
    const ticketDescripcionUsuario = document.getElementById("ticketDescripcionUsuario");
    const ticketCategoriaUsuario = document.getElementById("ticketCategoriaUsuario");
    const ticketCiudadUsuario = document.getElementById("ticketCiudadUsuario");
    const ticketPrioridadUsuario = document.getElementById("ticketPrioridadUsuario");
    const listaTicketsUsuario = document.getElementById("listaTicketsUsuario");
    const filtroEstadoTicketUsuario = document.getElementById("filtroEstadoTicketUsuario");
    const estadoTicketId = document.getElementById("estadoTicketId");
    const estadoTicketTitulo = document.getElementById("estadoTicketTitulo");
    const estadoTicketDescripcion = document.getElementById("estadoTicketDescripcion");
    const estadoTicketDispositivo = document.getElementById("estadoTicketDispositivo");
    const estadoTicketPrioridad = document.getElementById("estadoTicketPrioridad");
    const estadoTicketTecnico = document.getElementById("estadoTicketTecnico");
    const estadoTicketFecha = document.getElementById("estadoTicketFecha");
    const estadoTicketBadge = document.getElementById("estadoTicketBadge");
    const estadoTicketEstado = document.getElementById("estadoTicketEstado");
    const estadoTicketMensaje = document.getElementById("estadoTicketMensaje");
    const estadoTicketPago = document.getElementById("estadoTicketPago");
    const estadoTicketValor = document.getElementById("estadoTicketValor");
    const estadoTicketComentario = document.getElementById("estadoTicketComentario");
    const btnNotificacionesUsuario = document.getElementById("btnNotificacionesUsuario");
    const contadorNotificacionesUsuario = document.getElementById("contadorNotificacionesUsuario");
    const panelNotificacionesUsuario = document.getElementById("panelNotificacionesUsuario");
    const listaNotificacionesUsuario = document.getElementById("listaNotificacionesUsuario");
    const btnNotificacionesTecnico = document.getElementById("btnNotificacionesTecnico");
    const contadorNotificacionesTecnico = document.getElementById("contadorNotificacionesTecnico");
    const panelNotificacionesTecnico = document.getElementById("panelNotificacionesTecnico");
    const listaNotificacionesTecnico = document.getElementById("listaNotificacionesTecnico");
    const btnNotificacionesAdmin = document.getElementById("btnNotificacionesAdmin");
    const contadorNotificacionesAdmin = document.getElementById("contadorNotificacionesAdmin");
    const panelNotificacionesAdmin = document.getElementById("panelNotificacionesAdmin");
    const listaNotificacionesAdmin = document.getElementById("listaNotificacionesAdmin");

    // SECCIONES ADMIN
    const dashboard = document.getElementById("dashboard__ad");
    const activos = document.getElementById("gestionActivos");
    const tickets = document.getElementById("ticketsAdmin");
    const registradosAdmin = document.getElementById("registradosAdmin");
    const dashboardTotalDispositivos = document.getElementById("dashboardTotalDispositivos");
    const dashboardTicketsAbiertos = document.getElementById("dashboardTicketsAbiertos");
    const dashboardTicketsProceso = document.getElementById("dashboardTicketsProceso");
    const dashboardTicketsCerrados = document.getElementById("dashboardTicketsCerrados");
    const dashboardActividadReciente = document.getElementById("dashboardActividadReciente");
    const dashboardDispositivosPopulares = document.getElementById("dashboardDispositivosPopulares");
    const adminIngresosAprobados = document.getElementById("adminIngresosAprobados");
    const adminIngresoEmpresa = document.getElementById("adminIngresoEmpresa");
    const adminIngresoTecnicos = document.getElementById("adminIngresoTecnicos");
    const adminPagosPendientes = document.getElementById("adminPagosPendientes");
    const adminGraficaIngresos = document.getElementById("adminGraficaIngresos");
    const adminPagosRecientes = document.getElementById("adminPagosRecientes");
    const tablaTicketsAdminBody = document.getElementById("tablaTicketsAdminBody");
    const adminTicketsTotal = document.getElementById("adminTicketsTotal");
    const adminTicketsAbiertos = document.getElementById("adminTicketsAbiertos");
    const adminTicketsProceso = document.getElementById("adminTicketsProceso");
    const adminTicketsCerrados = document.getElementById("adminTicketsCerrados");
    const totalActivosAdmin = document.getElementById("totalActivosAdmin");
    const activosAsignadosAdmin = document.getElementById("activosAsignadosAdmin");
    const activosMantenimientoAdmin = document.getElementById("activosMantenimientoAdmin");
    const sedesActivosAdmin = document.getElementById("sedesActivosAdmin");
    const buscarActivoAdmin = document.getElementById("buscarActivoAdmin");
    const filtroEstadoActivoAdmin = document.getElementById("filtroEstadoActivoAdmin");
    const tablaActivosAdminBody = document.getElementById("tablaActivosAdminBody");
    const tablaRegistradosBody = document.getElementById("tablaRegistradosBody");
    const tablaUsuariosNormalesBody = document.getElementById("tablaUsuariosNormalesBody");
    const totalRegistradosAdmin = document.getElementById("totalRegistradosAdmin");
    const totalUsuariosRegistrados = document.getElementById("totalUsuariosRegistrados");
    const totalTecnicosRegistrados = document.getElementById("totalTecnicosRegistrados");
    const totalAdminsRegistrados = document.getElementById("totalAdminsRegistrados");
    const formCrearCuentaAdmin = document.getElementById("formCrearCuentaAdmin");
    const adminCrearRol = document.getElementById("adminCrearRol");
    const adminCrearNombre = document.getElementById("adminCrearNombre");
    const adminCrearApellidos = document.getElementById("adminCrearApellidos");
    const adminCrearCorreo = document.getElementById("adminCrearCorreo");
    const adminCrearPassword = document.getElementById("adminCrearPassword");
    const adminCrearCiudad = document.getElementById("adminCrearCiudad");
    const adminCrearPais = document.getElementById("adminCrearPais");
    const adminCrearNacimiento = document.getElementById("adminCrearNacimiento");
    const btnAbrirCrearCuentaAdmin = document.getElementById("btnAbrirCrearCuentaAdmin");
    const modalCrearCuentaAdmin = document.getElementById("modalCrearCuentaAdmin");
    const btnCerrarCrearCuentaAdmin = document.getElementById("btnCerrarCrearCuentaAdmin");
    const modalAjustesCuenta = document.getElementById("modalAjustesCuenta");
    const formAjustesCuenta = document.getElementById("formAjustesCuenta");
    const ajustesNombre = document.getElementById("ajustesNombre");
    const ajustesApellidos = document.getElementById("ajustesApellidos");
    const ajustesCorreo = document.getElementById("ajustesCorreo");
    const ajustesPassword = document.getElementById("ajustesPassword");
    const btnCerrarAjustes = document.getElementById("btnCerrarAjustes");
    const btnEliminarCuentaAjustes = document.getElementById("btnEliminarCuentaAjustes");
    const modalCorreoExistente = document.getElementById("modalCorreoExistente");
    const modalCorreoExistenteTexto = document.getElementById("modalCorreoExistenteTexto");
    const btnCerrarCorreoExistente = document.getElementById("btnCerrarCorreoExistente");
    const btnLoginCorreoExistente = document.getElementById("btnLoginCorreoExistente");
    const btnUsarOtroCorreo = document.getElementById("btnUsarOtroCorreo");
    const accionesCorreoExistente = document.querySelector("#modalCorreoExistente .modal-alerta__acciones");
    const modalConfirmacion = document.getElementById("modalConfirmacion");
    const btnCerrarConfirmacion = document.getElementById("btnCerrarConfirmacion");
    const btnConfirmacionAceptar = document.getElementById("btnConfirmacionAceptar");
    const btnConfirmacionCancelar = document.getElementById("btnConfirmacionCancelar");
    const modalConfirmacionTitulo = document.getElementById("modalConfirmacionTitulo");
    const modalConfirmacionTexto = document.getElementById("modalConfirmacionTexto");
    const modalConfirmacionIcono = document.getElementById("modalConfirmacionIcono");
    const modalDireccionRecogida = document.getElementById("modalDireccionRecogida");
    const btnCerrarDireccionRecogida = document.getElementById("btnCerrarDireccionRecogida");
    const formDireccionRecogida = document.getElementById("formDireccionRecogida");
    const inputDireccionRecogida = document.getElementById("inputDireccionRecogida");
    const modalPagoUsuario = document.getElementById("modalPagoUsuario");
    const btnCerrarPagoUsuario = document.getElementById("btnCerrarPagoUsuario");
    const formPagoUsuario = document.getElementById("formPagoUsuario");
    const selectMetodoPagoUsuario = document.getElementById("selectMetodoPagoUsuario");
    const modalPagoUsuarioTexto = document.getElementById("modalPagoUsuarioTexto");

    // BOTONES MENU ADMIN
    const btnDashboard = document.getElementById("btnDashboard");
    const btnActivos = document.getElementById("btnActivos");
    const btnTickets = document.getElementById("btnTickets");
    const btnRegistrados = document.getElementById("btnRegistrados");
    const botonesLogout = document.querySelectorAll(".logout");

    // CREDENCIALES
    const credenciales = {

        usuario: {
            user: "esteban.trujillo@gmail.com",
            pass: "12345678"
        },

        admin: {
            user: "admin.itech@empresa.com",
            pass: "Admin12345"
        },

        tecnico: {
            user: "laura.mendez@itech.com",
            pass: "Tecnico12345"
        }

    };

    let usuarioActual = "Esteban Trujillo";
    let correoUsuarioActual = credenciales.usuario.user;
    let usuarioActualId = null;
    let rolUsuarioActual = "Usuario";
    let campoCorreoExistente = null;
    let apiDisponible = false;
    const apiBase = window.location.protocol === "file:" ? "http://localhost:3000/api" : "/api";
    const ticketsDbKey = "ticketsSoporte";
    const ticketActualUsuarioKey = "ticketActualUsuarioId";
    const ticketsEliminadosKey = "ticketsEliminados";
    const usuariosDbKey = "usuariosRegistrados";
    const sesionActualKey = "sesionActual";
    const sincronizacionKey = "sincronizacionSistema";
    const notificacionesKey = "notificacionesTickets";
    const pagoSinSolicitar = "Sin solicitar";
    const pagoPendiente = "Pendiente aprobacion";
    const pagoAprobado = "Aprobado";
    const porcentajeEmpresa = 0.7;
    const porcentajeTecnico = 0.3;
    let detalleAdminAbierto = null;
    const borradoresDetalleAdmin = new Map();
    const detallesTecnicoAbiertos = new Set();
    const borradoresDetalleTecnico = new Map();

    const cuentasEspeciales = [

        {
            password: "Tecnico12345",
            nombre: "Laura Mendez",
            rol: "Tecnico",
            correo: "laura.mendez@itech.com",
            ciudad: "Bogota",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        },

        {
            password: "Admin12345",
            nombre: "Administrador ITech",
            rol: "Admin",
            correo: "admin.itech@empresa.com",
            ciudad: "Bogota",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        },

        {
            password: "Carlos12345",
            nombre: "Carlos Rojas",
            rol: "Tecnico",
            correo: "carlos.rojas@itech.com",
            ciudad: "Bogota",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        },

        {
            password: "Andrea12345",
            nombre: "Andrea Lopez",
            rol: "Tecnico",
            correo: "andrea.lopez@itech.com",
            ciudad: "Medellin",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        },

        {
            password: "Luis12345",
            nombre: "Luis Martinez",
            rol: "Tecnico",
            correo: "luis.martinez@itech.com",
            ciudad: "Cali",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        },

        {
            password: "Sofia12345",
            nombre: "Sofia Torres",
            rol: "Tecnico",
            correo: "sofia.torres@itech.com",
            ciudad: "Barranquilla",
            pais: "Colombia",
            nacimiento: "Cuenta interna",
            estado: "Correo especial"
        }

    ];

    const usuariosNormalesBase = [];

    const tecnicos = [

        {
            nombre: "Carlos Rojas",
            ciudad: "Bogota"
        },

        {
            nombre: "Laura Mendez",
            ciudad: "Bogota"
        },

        {
            nombre: "Andrea Lopez",
            ciudad: "Medellin"
        },

        {
            nombre: "Luis Martinez",
            ciudad: "Cali"
        },

        {
            nombre: "Sofia Torres",
            ciudad: "Barranquilla"
        }

    ];

    const ticketsBase = [];
    const sedesCercanas = {
        bogota: "iTech Service Bogota - Calle 93 # 15-42",
        medellin: "iTech Service Medellin - Carrera 43A # 6 Sur-26",
        cali: "iTech Service Cali - Avenida 6N # 23N-18",
        barranquilla: "iTech Service Barranquilla - Carrera 53 # 80-198"
    };

    function obtenerRegistrados() {

        const datos = localStorage.getItem(usuariosDbKey);

        if (!datos) {
            return [];
        }

        try {
            return JSON.parse(datos);
        } catch (error) {
            return [];
        }

    }

    async function apiRequest(ruta, opciones = {}) {

        const respuesta = await fetch(`${apiBase}${ruta}`, {
            headers: {
                "Content-Type": "application/json",
                ...(opciones.headers || {})
            },
            ...opciones
        });

        if (!respuesta.ok) {
            const error = await respuesta.json().catch(() => ({ error: "Error de conexion" }));
            throw new Error(error.error || "Error de conexion");
        }

        if (respuesta.status === 204) {
            return null;
        }

        return respuesta.json();

    }

    function mostrarModalCorreoExistente(correo = "", campoObjetivo = registroCorreo) {

        if (!modalCorreoExistente) {
            alert("Este correo ya tiene cuenta. Inicia sesion o usa otro correo.");
            return;
        }

        const correoLimpio = correo.trim();
        const puedeIniciarSesion = login && login.style.display !== "none";
        campoCorreoExistente = campoObjetivo;
        modalCorreoExistente.dataset.correo = correoLimpio;
        modalCorreoExistente.dataset.puedeIniciarSesion = puedeIniciarSesion ? "true" : "false";

        if (btnLoginCorreoExistente) {
            btnLoginCorreoExistente.hidden = !puedeIniciarSesion;
        }

        if (accionesCorreoExistente) {
            accionesCorreoExistente.classList.toggle("una-accion", !puedeIniciarSesion);
        }

        if (modalCorreoExistenteTexto) {
            modalCorreoExistenteTexto.textContent = correoLimpio
                ? `${correoLimpio} ya esta registrado. Puedes iniciar sesion con ese correo o usar uno diferente.`
                : "Este correo ya esta registrado. Puedes iniciar sesion con ese correo o usar uno diferente.";
        }

        modalCorreoExistente.hidden = false;

        if (puedeIniciarSesion && btnLoginCorreoExistente) {
            btnLoginCorreoExistente.focus();
        } else if (btnUsarOtroCorreo) {
            btnUsarOtroCorreo.focus();
        }

    }

    function cerrarModalCorreoExistente() {

        if (modalCorreoExistente) {
            modalCorreoExistente.hidden = true;
        }

    }

    function mostrarConfirmacion({ titulo, texto, confirmar = "Confirmar", cancelar = "Cancelar", peligro = false, icono = "fa-solid fa-triangle-exclamation" }) {

        if (!modalConfirmacion) {
            return Promise.resolve(confirm(texto || titulo));
        }

        modalConfirmacionTitulo.textContent = titulo;
        modalConfirmacionTexto.textContent = texto;
        modalConfirmacionIcono.className = icono;
        btnConfirmacionAceptar.textContent = confirmar;
        btnConfirmacionCancelar.textContent = cancelar;
        btnConfirmacionAceptar.classList.toggle("peligro", peligro);
        modalConfirmacion.hidden = false;
        btnConfirmacionCancelar.focus();

        return new Promise((resolve) => {
            const cerrar = (resultado) => {
                modalConfirmacion.hidden = true;
                btnConfirmacionAceptar.onclick = null;
                btnConfirmacionCancelar.onclick = null;
                btnCerrarConfirmacion.onclick = null;
                modalConfirmacion.onclick = null;
                resolve(resultado);
            };

            btnConfirmacionAceptar.onclick = () => cerrar(true);
            btnConfirmacionCancelar.onclick = () => cerrar(false);
            btnCerrarConfirmacion.onclick = () => cerrar(false);
            modalConfirmacion.onclick = (e) => {
                if (e.target === modalConfirmacion) {
                    cerrar(false);
                }
            };
        });

    }

    function solicitarDireccionRecogida() {

        if (!modalDireccionRecogida || !formDireccionRecogida) {
            const direccion = prompt("Escribe la direccion de recogida");
            return Promise.resolve(direccion ? direccion.trim() : "");
        }

        modalDireccionRecogida.hidden = false;
        inputDireccionRecogida.value = "";
        inputDireccionRecogida.focus();

        return new Promise((resolve) => {
            const cerrar = (direccion = "") => {
                modalDireccionRecogida.hidden = true;
                formDireccionRecogida.onsubmit = null;
                btnCerrarDireccionRecogida.onclick = null;
                modalDireccionRecogida.onclick = null;
                resolve(direccion);
            };

            formDireccionRecogida.onsubmit = (e) => {
                e.preventDefault();
                cerrar(inputDireccionRecogida.value.trim());
            };

            btnCerrarDireccionRecogida.onclick = () => cerrar("");
            modalDireccionRecogida.onclick = (e) => {
                if (e.target === modalDireccionRecogida) {
                    cerrar("");
                }
            };
        });

    }

    function solicitarMetodoPago(ticket) {

        if (!modalPagoUsuario || !formPagoUsuario || !selectMetodoPagoUsuario) {
            const metodo = prompt("Metodo de pago: tarjeta, transferencia, Nequi/Daviplata o efectivo");
            return Promise.resolve(metodo ? metodo.trim() : "");
        }

        modalPagoUsuario.hidden = false;
        selectMetodoPagoUsuario.value = "";

        if (modalPagoUsuarioTexto) {
            modalPagoUsuarioTexto.textContent = `Valor a pagar: ${formatearValor(ticket.valorArreglo)}. Selecciona el metodo de pago para pedir aprobacion al administrador.`;
        }

        selectMetodoPagoUsuario.focus();

        return new Promise((resolve) => {
            const cerrar = (metodo = "") => {
                modalPagoUsuario.hidden = true;
                formPagoUsuario.onsubmit = null;
                btnCerrarPagoUsuario.onclick = null;
                modalPagoUsuario.onclick = null;
                resolve(metodo);
            };

            formPagoUsuario.onsubmit = (e) => {
                e.preventDefault();
                cerrar(selectMetodoPagoUsuario.value);
            };

            btnCerrarPagoUsuario.onclick = () => cerrar("");
            modalPagoUsuario.onclick = (e) => {
                if (e.target === modalPagoUsuario) {
                    cerrar("");
                }
            };
        });

    }

    function obtenerSedeCercana(ciudad) {

        return sedesCercanas[normalizarTexto(ciudad)] || `iTech Service ${ciudad} - Centro de servicio principal`;

    }

    function registrarNotificacionesPorTicketsActualizados(ticketsActualizados) {

        const ticketsAnteriores = obtenerTodosLosTickets();

        ticketsActualizados.forEach((ticketActualizado) => {
            const ticketAnterior = ticketsAnteriores.find((ticket) => ticket.id === ticketActualizado.id);
            registrarNotificacionCambioEstado(ticketActualizado, ticketAnterior);
            registrarNotificacionAsignacionTecnico(ticketActualizado, ticketAnterior);
        });

    }

    async function cargarDatosDesdeApi() {

        try {
            const [ticketsApi, usuariosApi] = await Promise.all([
                apiRequest("/tickets"),
                apiRequest("/users")
            ]);

            apiDisponible = true;
            registrarNotificacionesPorTicketsActualizados(ticketsApi);
            guardarTicketsDesdeApi(ticketsApi);
            localStorage.setItem(usuariosDbKey, JSON.stringify(
                usuariosApi
                    .map((usuario) => ({
                        id: usuario.id || null,
                        nombre: usuario.nombre,
                        nombreBase: usuario.nombreBase || "",
                        apellidos: usuario.apellidos || "",
                        rol: formatearRol(usuario.rol),
                        correo: usuario.correo,
                        password: usuario.passwordDemo || "",
                        ciudad: usuario.ciudad,
                        pais: usuario.pais,
                        nacimiento: usuario.nacimiento || "",
                        estado: usuario.estado
                    }))
            ));
        } catch (error) {
            apiDisponible = false;
            console.warn("API no disponible, usando datos locales");
        }

    }

    function obtenerUsuariosLogin() {

        return [
            {
                nombre: "Esteban Trujillo",
                rol: "Usuario",
                correo: credenciales.usuario.user,
                password: credenciales.usuario.pass,
                ciudad: "Bogota",
                pais: "Colombia",
                nacimiento: "Cuenta base",
                estado: "Usuario base"
            },
            ...usuariosNormalesBase,
            ...obtenerRegistrados()
        ];

    }

    function buscarUsuarioLogin(correo, password) {

        return obtenerUsuariosLogin().find((usuario) => (
            normalizarTexto(usuario.correo) === normalizarTexto(correo) &&
            usuario.password === password
        ));

    }

    function formatearRol(rolUsuario) {

        const rolNormalizado = normalizarTexto(rolUsuario || "");

        if (rolNormalizado === "admin") return "Admin";
        if (rolNormalizado === "tecnico") return "Tecnico";
        return "Usuario";

    }

    function formatearFechaCuenta(fecha) {

        if (!fecha) return "";

        const valor = String(fecha);

        if (!/^\d{4}-\d{2}-\d{2}/.test(valor)) {
            return valor;
        }

        return valor.slice(0, 10);

    }

    function obtenerValorRolApi(rolUsuario) {

        const rolFormateado = formatearRol(rolUsuario);

        if (rolFormateado === "Admin") return "admin";
        if (rolFormateado === "Tecnico") return "tecnico";
        return "usuario";

    }

    function buscarCuentaEspecialLogin(correo, password) {

        return cuentasEspeciales.find((cuenta) => (
            normalizarTexto(cuenta.correo) === normalizarTexto(correo) &&
            cuenta.password === password
        ));

    }

    function obtenerTickets() {

        const datos = localStorage.getItem(ticketsDbKey);

        if (!datos) {
            return [];
        }

        try {
            return JSON.parse(datos).map(normalizarTicketPago);
        } catch (error) {
            return [];
        }

    }

    function obtenerTicketsEliminados() {

        const datos = localStorage.getItem(ticketsEliminadosKey);

        if (!datos) {
            return [];
        }

        try {
            return JSON.parse(datos);
        } catch (error) {
            return [];
        }

    }

    function obtenerNotificaciones() {

        const datos = localStorage.getItem(notificacionesKey);

        if (!datos) {
            return [];
        }

        try {
            return JSON.parse(datos);
        } catch (error) {
            return [];
        }

    }

    function guardarNotificaciones(notificaciones) {

        localStorage.setItem(notificacionesKey, JSON.stringify(notificaciones));
        emitirSincronizacion();

    }

    function guardarTicketsEliminados(idsEliminados) {

        localStorage.setItem(ticketsEliminadosKey, JSON.stringify(idsEliminados));
        emitirSincronizacion();

    }

    function guardarTickets(ticketsGuardados) {

        localStorage.setItem(ticketsDbKey, JSON.stringify(ticketsGuardados.map(normalizarTicketPago)));
        emitirSincronizacion();

    }

    function guardarTicketsDesdeApi(ticketsApi) {

        const ticketsPorId = new Map();
        const idsApi = new Set(ticketsApi.map((ticket) => ticket.id));
        const idsEliminados = obtenerTicketsEliminados().filter((ticketId) => !idsApi.has(ticketId));

        obtenerTickets().forEach((ticket) => {
            ticketsPorId.set(ticket.id, ticket);
        });

        ticketsApi.forEach((ticket) => {
            ticketsPorId.set(ticket.id, ticket);
        });

        guardarTickets(Array.from(ticketsPorId.values()));
        guardarTicketsEliminados(idsEliminados);

    }

    function guardarTicketLocal(ticketActualizado) {

        const ticketsGuardados = obtenerTickets();
        const indice = ticketsGuardados.findIndex((ticket) => ticket.id === ticketActualizado.id);

        if (indice >= 0) {
            ticketsGuardados[indice] = ticketActualizado;
        } else {
            ticketsGuardados.push(ticketActualizado);
        }

        guardarTickets(ticketsGuardados);

    }

    function obtenerTodosLosTickets() {

        const ticketsPorId = new Map();
        const idsEliminados = obtenerTicketsEliminados();

        if (apiDisponible) {
            return obtenerTickets();
        }

        ticketsBase.forEach((ticket) => {
            ticketsPorId.set(ticket.id, ticket);
        });

        obtenerTickets().forEach((ticket) => {
            ticketsPorId.set(ticket.id, ticket);
        });

        return Array.from(ticketsPorId.values()).filter((ticket) => !idsEliminados.includes(ticket.id));

    }

    function normalizarTexto(texto) {

        return String(texto || "").toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    }

    function normalizarTicketPago(ticket = {}) {

        return {
            ...ticket,
            pagoEstado: ticket.pagoEstado || pagoSinSolicitar,
            metodoPago: ticket.metodoPago || "",
            fechaPago: ticket.fechaPago || "",
            fechaPagoAprobado: ticket.fechaPagoAprobado || ""
        };

    }

    function obtenerEstadoPago(ticket) {

        return normalizarTicketPago(ticket).pagoEstado;

    }

    function ticketPagoAprobado(ticket) {

        return obtenerEstadoPago(ticket) === pagoAprobado;

    }

    function ticketPagoPendiente(ticket) {

        return obtenerEstadoPago(ticket) === pagoPendiente;

    }

    function ticketPuedePagarse(ticket) {

        return ticket.estado === "Listo para entrega" && !ticketPagoAprobado(ticket) && Number(ticket.valorArreglo || 0) > 0;

    }

    function calcularRepartoValor(valor) {

        const total = Number(valor || 0);

        return {
            total,
            empresa: Math.round(total * porcentajeEmpresa),
            tecnico: Math.round(total * porcentajeTecnico)
        };

    }

    function limpiarNombrePersona(texto) {

        return String(texto || "").replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü ]/g, "").replace(/\s+/g, " ");

    }

    function esNombrePersonaValido(texto) {

        return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/.test(String(texto || "").trim());

    }

    function activarFiltroNombre(input) {

        if (!input) return;

        input.addEventListener("input", () => {
            input.value = limpiarNombrePersona(input.value);
        });

    }

    function obtenerPartesNombreCuenta(cuenta = {}) {

        if (cuenta.nombreBase || cuenta.apellidos) {
            return {
                nombre: cuenta.nombreBase || String(cuenta.nombre || "").replace(cuenta.apellidos || "", "").trim(),
                apellidos: cuenta.apellidos || ""
            };
        }

        const partes = String(cuenta.nombre || usuarioActual || "").trim().split(/\s+/).filter(Boolean);

        if (partes.length <= 1) {
            return {
                nombre: partes[0] || "",
                apellidos: ""
            };
        }

        return {
            nombre: partes.slice(0, -1).join(" "),
            apellidos: partes.slice(-1).join(" ")
        };

    }

    function obtenerDatosSesionActual() {

        return obtenerSesionGuardada() || {
            id: usuarioActualId,
            nombre: usuarioActual,
            correo: correoUsuarioActual,
            rol: rolUsuarioActual
        };

    }

    function actualizarPerfilVisible(datosSesion) {

        if (formatearRol(datosSesion.rol) === "Usuario" && nombrePerfilUsuario) {
            nombrePerfilUsuario.textContent = datosSesion.nombre;
        }

        if (formatearRol(datosSesion.rol) === "Admin" && nombrePerfilAdmin) {
            nombrePerfilAdmin.textContent = datosSesion.nombre;
        }

        if (formatearRol(datosSesion.rol) === "Tecnico" && nombrePerfilTecnico) {
            nombrePerfilTecnico.textContent = datosSesion.nombre;
        }

    }

    function actualizarCuentaEnLocalStorage(datosActualizados, correoAnterior, nombreAnterior) {

        const registrados = obtenerRegistrados().map((registrado) => {
            const mismoId = datosActualizados.id && registrado.id && String(registrado.id) === String(datosActualizados.id);
            const mismoCorreo = normalizarTexto(registrado.correo) === normalizarTexto(correoAnterior);

            if (!mismoId && !mismoCorreo) {
                return registrado;
            }

            return {
                ...registrado,
                id: datosActualizados.id || registrado.id || null,
                nombre: datosActualizados.nombre,
                nombreBase: datosActualizados.nombreBase || obtenerPartesNombreCuenta(datosActualizados).nombre,
                apellidos: datosActualizados.apellidos || obtenerPartesNombreCuenta(datosActualizados).apellidos,
                correo: datosActualizados.correo,
                password: datosActualizados.password || registrado.password || registrado.passwordDemo || "",
                rol: formatearRol(datosActualizados.rol || registrado.rol),
                ciudad: datosActualizados.ciudad || registrado.ciudad,
                pais: datosActualizados.pais || registrado.pais,
                nacimiento: datosActualizados.nacimiento || registrado.nacimiento,
                estado: datosActualizados.estado || registrado.estado
            };
        });

        localStorage.setItem(usuariosDbKey, JSON.stringify(registrados));

        const ticketsActualizados = obtenerTickets().map((ticket) => {
            const copia = { ...ticket };

            if (
                (datosActualizados.id && copia.usuarioId && String(copia.usuarioId) === String(datosActualizados.id)) ||
                normalizarTexto(copia.correoUsuario) === normalizarTexto(correoAnterior) ||
                normalizarTexto(copia.usuario) === normalizarTexto(nombreAnterior)
            ) {
                copia.usuario = datosActualizados.nombre;
                copia.correoUsuario = datosActualizados.correo;
            }

            if (normalizarTexto(copia.tecnico) === normalizarTexto(nombreAnterior)) {
                copia.tecnico = datosActualizados.nombre;
            }

            return copia;
        });

        guardarTickets(ticketsActualizados);

    }

    function ticketPerteneceAUsuarioActual(ticket) {

        const mismoId = usuarioActualId && ticket.usuarioId && String(ticket.usuarioId) === String(usuarioActualId);
        const mismoCorreo = correoUsuarioActual && ticket.correoUsuario && normalizarTexto(ticket.correoUsuario) === normalizarTexto(correoUsuarioActual);
        const mismoNombre = ticket.usuario && normalizarTexto(ticket.usuario) === normalizarTexto(usuarioActual);

        return Boolean(mismoId || mismoCorreo || mismoNombre);

    }

    function notificacionPerteneceAUsuarioActual(notificacion) {

        const mismoId = usuarioActualId && notificacion.usuarioId && String(notificacion.usuarioId) === String(usuarioActualId);
        const mismoCorreo = correoUsuarioActual && notificacion.correoUsuario && normalizarTexto(notificacion.correoUsuario) === normalizarTexto(correoUsuarioActual);
        const mismoNombre = notificacion.usuario && normalizarTexto(notificacion.usuario) === normalizarTexto(usuarioActual);

        return Boolean(mismoId || mismoCorreo || mismoNombre);

    }

    function notificacionPerteneceATecnicoActual(notificacion) {

        return Boolean(notificacion.tecnico && normalizarTexto(notificacion.tecnico) === normalizarTexto(usuarioActual));

    }

    function notificacionPerteneceAAdmin(notificacion) {

        return notificacion.tipo === "admin";

    }

    function registrarNotificacionAdmin(ticket, titulo, mensaje) {

        const notificaciones = obtenerNotificaciones();

        notificaciones.unshift({
            id: `admin-${ticket.id}-${Date.now()}`,
            tipo: "admin",
            ticketId: ticket.id,
            titulo,
            mensaje,
            fecha: new Date().toLocaleString("es-CO"),
            leida: false
        });

        guardarNotificaciones(notificaciones.slice(0, 120));
        renderNotificacionesAdmin();

    }

    function crearTextoNotificacionEstado(ticket) {

        if (ticket.estado === "En proceso") {
            return {
                titulo: "Tu dispositivo esta en proceso",
                mensaje: `${ticket.tecnico} ya esta trabajando en ${ticket.dispositivo}.`
            };
        }

        if (["Reparado", "Listo para entrega", "Cerrado"].includes(ticket.estado)) {
            return {
                titulo: "Tu dispositivo esta listo",
                mensaje: `Puedes recoger ${ticket.dispositivo} en ${ticket.ciudad}. Valor a pagar: ${formatearValor(ticket.valorArreglo)}.`
            };
        }

        return {
            titulo: `Ticket ${ticket.estado}`,
            mensaje: `${ticket.dispositivo} cambio a estado ${ticket.estado}.`
        };

    }

    function registrarNotificacionCambioEstado(ticketActualizado, ticketAnterior) {

        if (!ticketAnterior || ticketAnterior.estado === ticketActualizado.estado) {
            return;
        }

        const contenido = crearTextoNotificacionEstado(ticketActualizado);
        const notificaciones = obtenerNotificaciones();

        notificaciones.unshift({
            id: `${ticketActualizado.id}-${Date.now()}`,
            tipo: "estado-usuario",
            ticketId: ticketActualizado.id,
            usuarioId: ticketActualizado.usuarioId || null,
            usuario: ticketActualizado.usuario || "",
            correoUsuario: ticketActualizado.correoUsuario || "",
            estado: ticketActualizado.estado,
            titulo: contenido.titulo,
            mensaje: contenido.mensaje,
            fecha: new Date().toLocaleString("es-CO"),
            leida: false
        });

        guardarNotificaciones(notificaciones.slice(0, 80));
        renderNotificacionesUsuario();

    }

    function registrarNotificacionAsignacionTecnico(ticketActualizado, ticketAnterior) {

        if (!ticketActualizado.tecnico || ticketActualizado.tecnico === "Sin asignar") {
            return;
        }

        if (ticketAnterior && ticketAnterior.tecnico === ticketActualizado.tecnico) {
            return;
        }

        const notificaciones = obtenerNotificaciones();
        const yaExiste = notificaciones.some((notificacion) => (
            notificacion.tipo === "asignacion-tecnico"
            && notificacion.ticketId === ticketActualizado.id
            && normalizarTexto(notificacion.tecnico) === normalizarTexto(ticketActualizado.tecnico)
        ));

        if (yaExiste) {
            return;
        }

        notificaciones.unshift({
            id: `${ticketActualizado.id}-${normalizarTexto(ticketActualizado.tecnico)}-${Date.now()}`,
            tipo: "asignacion-tecnico",
            ticketId: ticketActualizado.id,
            tecnico: ticketActualizado.tecnico,
            ciudad: ticketActualizado.ciudad,
            titulo: "Nuevo trabajo asignado",
            mensaje: `${ticketActualizado.usuario || "Un usuario"} necesita soporte para ${ticketActualizado.dispositivo} en ${ticketActualizado.ciudad}.`,
            fecha: new Date().toLocaleString("es-CO"),
            leida: false
        });

        guardarNotificaciones(notificaciones.slice(0, 100));
        renderNotificacionesTecnico();

    }

    function marcarNotificacionesUsuarioLeidas() {

        const notificaciones = obtenerNotificaciones();
        let huboCambios = false;

        const actualizadas = notificaciones.map((notificacion) => {
            if (!notificacion.leida && notificacionPerteneceAUsuarioActual(notificacion)) {
                huboCambios = true;
                return {
                    ...notificacion,
                    leida: true
                };
            }

            return notificacion;
        });

        if (huboCambios) {
            guardarNotificaciones(actualizadas);
        }

    }

    function renderNotificacionesUsuario() {

        if (!listaNotificacionesUsuario || !contadorNotificacionesUsuario) {
            return;
        }

        const notificacionesUsuario = obtenerNotificaciones().filter(notificacionPerteneceAUsuarioActual);
        const sinLeer = notificacionesUsuario.filter((notificacion) => !notificacion.leida).length;

        contadorNotificacionesUsuario.textContent = sinLeer;
        contadorNotificacionesUsuario.hidden = sinLeer === 0;
        listaNotificacionesUsuario.innerHTML = "";

        if (notificacionesUsuario.length === 0) {
            const vacio = document.createElement("p");
            vacio.className = "notificaciones-vacias";
            vacio.textContent = "No tienes notificaciones nuevas.";
            listaNotificacionesUsuario.appendChild(vacio);
            return;
        }

        notificacionesUsuario.slice(0, 8).forEach((notificacion) => {
            const item = document.createElement("article");
            item.className = `notificacion-item ${notificacion.leida ? "" : "no-leida"}`;
            item.innerHTML = `
                <strong>${notificacion.titulo}</strong>
                <p>${notificacion.mensaje}</p>
                <span>${notificacion.fecha}</span>
            `;
            item.addEventListener("click", () => {
                localStorage.setItem(ticketActualUsuarioKey, notificacion.ticketId);
                mostrarEstadoTicketUsuario();
                if (panelNotificacionesUsuario) {
                    panelNotificacionesUsuario.hidden = true;
                }
            });
            listaNotificacionesUsuario.appendChild(item);
        });

    }

    function marcarNotificacionesTecnicoLeidas() {

        const notificaciones = obtenerNotificaciones();
        let huboCambios = false;

        const actualizadas = notificaciones.map((notificacion) => {
            if (!notificacion.leida && notificacionPerteneceATecnicoActual(notificacion)) {
                huboCambios = true;
                return {
                    ...notificacion,
                    leida: true
                };
            }

            return notificacion;
        });

        if (huboCambios) {
            guardarNotificaciones(actualizadas);
        }

    }

    function renderNotificacionesTecnico() {

        if (!listaNotificacionesTecnico || !contadorNotificacionesTecnico) {
            return;
        }

        const notificacionesTecnico = obtenerNotificaciones().filter(notificacionPerteneceATecnicoActual);
        const sinLeer = notificacionesTecnico.filter((notificacion) => !notificacion.leida).length;

        contadorNotificacionesTecnico.textContent = sinLeer;
        contadorNotificacionesTecnico.hidden = sinLeer === 0;
        listaNotificacionesTecnico.innerHTML = "";

        if (notificacionesTecnico.length === 0) {
            const vacio = document.createElement("p");
            vacio.className = "notificaciones-vacias";
            vacio.textContent = "No tienes trabajos nuevos.";
            listaNotificacionesTecnico.appendChild(vacio);
            return;
        }

        notificacionesTecnico.slice(0, 8).forEach((notificacion) => {
            const item = document.createElement("article");
            item.className = `notificacion-item ${notificacion.leida ? "" : "no-leida"}`;
            item.innerHTML = `
                <strong>${notificacion.titulo}</strong>
                <p>${notificacion.mensaje}</p>
                <span>${notificacion.fecha}</span>
            `;
            item.addEventListener("click", () => {
                detallesTecnicoAbiertos.add(notificacion.ticketId);
                renderTicketsTecnico();
                if (panelNotificacionesTecnico) {
                    panelNotificacionesTecnico.hidden = true;
                }
            });
            listaNotificacionesTecnico.appendChild(item);
        });

    }

    function marcarNotificacionesAdminLeidas() {

        const notificaciones = obtenerNotificaciones();
        let huboCambios = false;

        const actualizadas = notificaciones.map((notificacion) => {
            if (!notificacion.leida && notificacionPerteneceAAdmin(notificacion)) {
                huboCambios = true;
                return {
                    ...notificacion,
                    leida: true
                };
            }

            return notificacion;
        });

        if (huboCambios) {
            guardarNotificaciones(actualizadas);
        }

    }

    function abrirTicketsAdminDesdeNotificacion(ticketId) {

        if (!tickets || !pantallaAdmin) {
            return;
        }

        ocultarSeccionesAdmin();
        renderTicketsAdmin();
        tickets.style.display = "flex";

        const detalle = document.getElementById(`admin-detalle-${ticketId}`);
        const ticket = obtenerTodosLosTickets().find((item) => item.id === ticketId);

        if (detalle && ticket) {
            mostrarDetalleAdmin(detalle, ticket, "ver");
            detalle.scrollIntoView({ behavior: "smooth", block: "center" });
        }

    }

    function renderNotificacionesAdmin() {

        if (!listaNotificacionesAdmin || !contadorNotificacionesAdmin) {
            return;
        }

        const notificacionesAdmin = obtenerNotificaciones().filter(notificacionPerteneceAAdmin);
        const sinLeer = notificacionesAdmin.filter((notificacion) => !notificacion.leida).length;

        contadorNotificacionesAdmin.textContent = sinLeer;
        contadorNotificacionesAdmin.hidden = sinLeer === 0;
        listaNotificacionesAdmin.innerHTML = "";

        if (notificacionesAdmin.length === 0) {
            const vacio = document.createElement("p");
            vacio.className = "notificaciones-vacias";
            vacio.textContent = "No hay novedades para revisar.";
            listaNotificacionesAdmin.appendChild(vacio);
            return;
        }

        notificacionesAdmin.slice(0, 10).forEach((notificacion) => {
            const item = document.createElement("article");
            item.className = `notificacion-item ${notificacion.leida ? "" : "no-leida"}`;
            item.innerHTML = `
                <strong>${notificacion.titulo}</strong>
                <p>${notificacion.mensaje}</p>
                <span>${notificacion.fecha}</span>
            `;
            item.addEventListener("click", () => {
                abrirTicketsAdminDesdeNotificacion(notificacion.ticketId);
                if (panelNotificacionesAdmin) {
                    panelNotificacionesAdmin.hidden = true;
                }
            });
            listaNotificacionesAdmin.appendChild(item);
        });

    }

    function obtenerTecnicosDisponibles() {

        const tecnicosPorNombre = new Map();

        tecnicos.forEach((tecnico) => {
            tecnicosPorNombre.set(normalizarTexto(tecnico.nombre), tecnico);
        });

        obtenerRegistrados()
            .filter((usuarioRegistrado) => formatearRol(usuarioRegistrado.rol) === "Tecnico")
            .forEach((usuarioRegistrado) => {
                const nombre = usuarioRegistrado.nombre;

                if (nombre) {
                    tecnicosPorNombre.set(normalizarTexto(nombre), {
                        nombre,
                        ciudad: usuarioRegistrado.ciudad || "Bogota"
                    });
                }
            });

        return Array.from(tecnicosPorNombre.values());

    }

    function asignarTecnicoAutomatico(ciudad) {

        const ticketsActuales = obtenerTodosLosTickets();
        const tecnicosDisponibles = obtenerTecnicosDisponibles();
        const tecnicosMismaCiudad = tecnicosDisponibles.filter((tecnico) => normalizarTexto(tecnico.ciudad) === normalizarTexto(ciudad));
        const candidatos = tecnicosMismaCiudad.length > 0 ? tecnicosMismaCiudad : tecnicosDisponibles;

        if (candidatos.length === 0) {
            return {
                nombre: "Sin asignar",
                ciudad
            };
        }

        return candidatos
            .map((tecnico) => ({
                ...tecnico,
                ticketsAsignados: ticketsActuales.filter((ticket) => ticket.tecnico === tecnico.nombre).length
            }))
            .sort((a, b) => a.ticketsAsignados - b.ticketsAsignados)[0];

    }

    function guardarTicket(ticket) {

        guardarTicketLocal(ticket);
        registrarNotificacionAdmin(
            ticket,
            "Nuevo ticket creado",
            `${ticket.usuario || "Un usuario"} reporto ${ticket.dispositivo} en ${ticket.ciudad}.`
        );
        registrarNotificacionAsignacionTecnico(ticket, null);

        if (ticketPerteneceAUsuarioActual(ticket)) {
            localStorage.setItem(ticketActualUsuarioKey, ticket.id);
        }

    }

    function generarTicketId() {

        const idsExistentes = [
            ...ticketsBase.map((ticket) => ticket.id),
            ...obtenerTickets().map((ticket) => ticket.id),
            ...obtenerTicketsEliminados()
        ];
        const ultimoNumero = idsExistentes.reduce((mayor, id) => {
            const numero = Number(String(id).replace("TKT-", ""));
            return Number.isNaN(numero) ? mayor : Math.max(mayor, numero);
        }, 0);

        return `TKT-${String(ultimoNumero + 1).padStart(3, "0")}`;

    }

    function actualizarTicket(ticketActualizado) {

        const ticketsGuardados = obtenerTickets();
        const indice = ticketsGuardados.findIndex((ticket) => ticket.id === ticketActualizado.id);
        const ticketAnterior = indice >= 0
            ? ticketsGuardados[indice]
            : obtenerTodosLosTickets().find((ticket) => ticket.id === ticketActualizado.id);

        guardarTicketLocal(ticketActualizado);
        registrarNotificacionCambioEstado(ticketActualizado, ticketAnterior);
        registrarNotificacionAsignacionTecnico(ticketActualizado, ticketAnterior);

        if (ticketPerteneceAUsuarioActual(ticketActualizado)) {
            localStorage.setItem(ticketActualUsuarioKey, ticketActualizado.id);
        }

        apiRequest(`/tickets/${ticketActualizado.id}`, {
            method: "PATCH",
            body: JSON.stringify(ticketActualizado)
        }).catch(() => {});

    }

    function eliminarTicket(ticketId) {

        const ticketsGuardados = obtenerTickets().filter((ticket) => ticket.id !== ticketId);
        const idsEliminados = obtenerTicketsEliminados();

        if (!idsEliminados.includes(ticketId)) {
            idsEliminados.push(ticketId);
        }

        guardarTickets(ticketsGuardados);
        guardarTicketsEliminados(idsEliminados);

        if (localStorage.getItem(ticketActualUsuarioKey) === ticketId) {
            localStorage.removeItem(ticketActualUsuarioKey);
        }

        apiRequest(`/tickets/${ticketId}`, {
            method: "DELETE"
        }).catch(() => {});

    }

    function guardarRegistrado(usuario) {

        const registrados = obtenerRegistrados();
        const indice = registrados.findIndex((registrado) => registrado.correo === usuario.correo);

        if (indice >= 0) {

            registrados[indice] = usuario;

        } else {

            registrados.push(usuario);

        }

        localStorage.setItem(usuariosDbKey, JSON.stringify(registrados));
        emitirSincronizacion();

    }

    function eliminarCuentaLocal(usuario) {

        const correo = normalizarTexto(usuario.correo);
        const id = usuario.id ? String(usuario.id) : "";
        const registrados = obtenerRegistrados().filter((registrado) => {
            const mismoCorreo = normalizarTexto(registrado.correo) === correo;
            const mismoId = id && registrado.id && String(registrado.id) === id;
            return !mismoCorreo && !mismoId;
        });

        localStorage.setItem(usuariosDbKey, JSON.stringify(registrados));

        const ticketsRestantes = obtenerTickets().filter((ticket) => {
            const mismoCorreo = normalizarTexto(ticket.correoUsuario) === correo;
            const mismoId = id && ticket.usuarioId && String(ticket.usuarioId) === id;
            return !mismoCorreo && !mismoId;
        });

        guardarTickets(ticketsRestantes);
        emitirSincronizacion();

    }

    async function eliminarCuenta(usuario) {

        if (usuario.id) {
            try {
                await apiRequest(`/users/${usuario.id}`, {
                    method: "DELETE"
                });
            } catch (error) {
                const mensaje = normalizarTexto(error.message);

                if (!mensaje.includes("usuario no encontrado") && !mensaje.includes("error de conexion")) {
                    throw error;
                }

                console.warn("La cuenta no se pudo eliminar en MySQL, se eliminara localmente.", error.message);
            }
        }

        eliminarCuentaLocal(usuario);

    }

    function actualizarTicketsPorCambioRolTecnico(usuario, rolAnterior, rolNuevo) {

        if (formatearRol(rolAnterior) !== "Tecnico" || formatearRol(rolNuevo) === "Tecnico") {
            return;
        }

        let huboCambios = false;
        const nombreTecnico = normalizarTexto(usuario.nombre);
        const ticketsActualizados = obtenerTickets().map((ticket) => {

            if (normalizarTexto(ticket.tecnico) !== nombreTecnico) {
                return ticket;
            }

            huboCambios = true;
            return {
                ...ticket,
                tecnico: "Sin asignar"
            };

        });

        if (huboCambios) {
            guardarTickets(ticketsActualizados);
        }

    }

    function cuentaEsSesionActual(cuenta) {

        const sesion = obtenerDatosSesionActual();
        const mismoId = cuenta.id && sesion.id && String(cuenta.id) === String(sesion.id);
        const mismoCorreo = cuenta.correo && sesion.correo && normalizarTexto(cuenta.correo) === normalizarTexto(sesion.correo);

        return Boolean(mismoId || mismoCorreo);

    }

    function actualizarSesionSiEsActual(cuentaActualizada) {

        if (!cuentaEsSesionActual(cuentaActualizada)) {
            return;
        }

        usuarioActual = cuentaActualizada.nombre;
        correoUsuarioActual = cuentaActualizada.correo;
        usuarioActualId = cuentaActualizada.id || usuarioActualId;
        rolUsuarioActual = formatearRol(cuentaActualizada.rol);
        guardarSesion(cuentaActualizada);

    }

    async function actualizarRolCuenta(usuario, rolApi) {

        const rolAnterior = formatearRol(usuario.rol);
        const rolNuevo = formatearRol(rolApi);

        if (rolAnterior === rolNuevo) {
            return usuario;
        }

        if (!usuario.id) {
            const cuentaLocal = {
                ...usuario,
                rol: rolNuevo,
                password: usuario.password || usuario.passwordDemo || "",
                passwordDemo: usuario.passwordDemo || usuario.password || ""
            };

            guardarRegistrado(cuentaLocal);
            actualizarTicketsPorCambioRolTecnico(usuario, rolAnterior, rolNuevo);
            actualizarSesionSiEsActual(cuentaLocal);
            return cuentaLocal;
        }

        const partesNombre = obtenerPartesNombreCuenta(usuario);
        const cuentaActualizada = await apiRequest(`/users/${usuario.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                nombre: partesNombre.nombre,
                apellidos: partesNombre.apellidos,
                correo: usuario.correo,
                password: "",
                rol: rolApi
            })
        });

        const cuentaNormalizada = {
            ...usuario,
            ...cuentaActualizada,
            password: usuario.password || cuentaActualizada.passwordDemo || usuario.passwordDemo || "",
            rol: formatearRol(cuentaActualizada.rol)
        };

        actualizarCuentaEnLocalStorage(cuentaNormalizada, usuario.correo, usuario.nombre);
        actualizarTicketsPorCambioRolTecnico(usuario, rolAnterior, rolNuevo);
        actualizarSesionSiEsActual(cuentaNormalizada);

        return cuentaNormalizada;

    }

    function cerrarSesionActual() {

        pantallaUsuario.style.display = "none";
        pantallaAdmin.style.display = "none";
        pantallaTecnico.style.display = "none";
        login.style.display = "flex";
        actualizarFooterSesion(false);
        mostrarLogin();
        form.reset();
        localStorage.removeItem(sesionActualKey);

    }

    function crearCelda(texto) {

        const celda = document.createElement("td");
        celda.textContent = texto;
        return celda;

    }

    function crearBadgeActivo(estadoActivo) {

        const celda = document.createElement("td");
        const badge = document.createElement("span");

        badge.className = `estado ${claseEstadoTicket(estadoActivo)}`;
        badge.textContent = estadoActivo;
        celda.appendChild(badge);

        return celda;

    }

    function obtenerCategoriaDispositivo(dispositivo) {

        const dispositivoNormalizado = normalizarTexto(dispositivo);

        if (dispositivoNormalizado.includes("iphone") || dispositivoNormalizado.includes("telefono") || dispositivoNormalizado.includes("celular")) {
            return "Telefono";
        }

        if (dispositivoNormalizado.includes("macbook") || dispositivoNormalizado.includes("portatil") || dispositivoNormalizado.includes("laptop")) {
            return "Portatil";
        }

        if (dispositivoNormalizado.includes("ipad") || dispositivoNormalizado.includes("tablet")) {
            return "Tablet";
        }

        if (dispositivoNormalizado.includes("watch") || dispositivoNormalizado.includes("apple watch")) {
            return "Accesorio";
        }

        return "Equipo";

    }

    function obtenerActivosDesdeTickets() {

        return obtenerTodosLosTickets().map((ticket) => ({
            id: ticket.id,
            nombre: ticket.dispositivo || "Dispositivo sin nombre",
            modelo: ticket.problema || "Soporte tecnico",
            serial: ticket.id,
            categoria: obtenerCategoriaDispositivo(ticket.dispositivo),
            ubicacion: ticket.ciudad || "Sin ciudad",
            asignadoA: ticket.tecnico || "Sin tecnico",
            estado: ticket.estado,
            valor: ticket.valorArreglo || 0,
            ultimoMovimiento: ticket.fecha || "Sin fecha",
            observacion: `${ticket.usuario || "Usuario"} - ${ticket.comentarioTecnico || ticket.descripcion || ticket.problema || "Sin detalle"}`
        }));

    }

    function renderActivosAdmin() {

        if (!tablaActivosAdminBody) {
            return;
        }

        const activosOperativos = obtenerActivosDesdeTickets();
        const busqueda = buscarActivoAdmin ? normalizarTexto(buscarActivoAdmin.value.trim()) : "";
        const estadoSeleccionado = filtroEstadoActivoAdmin ? filtroEstadoActivoAdmin.value : "Todos";
        const activosFiltrados = activosOperativos.filter((activo) => {
            const coincideBusqueda = !busqueda || normalizarTexto(`${activo.nombre} ${activo.modelo} ${activo.serial} ${activo.ubicacion} ${activo.asignadoA} ${activo.observacion}`).includes(busqueda);
            const coincideEstado = estadoSeleccionado === "Todos" || activo.estado === estadoSeleccionado;
            return coincideBusqueda && coincideEstado;
        });

        tablaActivosAdminBody.innerHTML = "";

        if (totalActivosAdmin) {
            totalActivosAdmin.textContent = activosOperativos.length;
            activosAsignadosAdmin.textContent = activosOperativos.filter((activo) => activo.asignadoA !== "Sin tecnico" && !ticketEstaTerminado(activo)).length;
            activosMantenimientoAdmin.textContent = activosOperativos.filter((activo) => activo.estado === "En proceso").length;
            sedesActivosAdmin.textContent = new Set(activosOperativos.map((activo) => activo.ubicacion)).size;
        }

        if (activosFiltrados.length === 0) {
            const filaVacia = document.createElement("tr");
            const celdaVacia = document.createElement("td");

            celdaVacia.colSpan = 8;
            celdaVacia.className = "tabla-vacia";
            celdaVacia.textContent = "No hay tickets que coincidan con la busqueda.";
            filaVacia.appendChild(celdaVacia);
            tablaActivosAdminBody.appendChild(filaVacia);
            return;
        }

        activosFiltrados.forEach((activo) => {

            const fila = document.createElement("tr");
            const activoCelda = document.createElement("td");
            const nombre = document.createElement("span");
            const modelo = document.createElement("span");

            nombre.className = "activo-nombre";
            modelo.className = "activo-modelo";
            nombre.textContent = activo.nombre;
            modelo.textContent = activo.modelo;
            activoCelda.appendChild(nombre);
            activoCelda.appendChild(modelo);

            fila.appendChild(activoCelda);
            fila.appendChild(crearCelda(activo.serial));
            fila.appendChild(crearCelda(activo.categoria));
            fila.appendChild(crearCelda(activo.ubicacion));
            fila.appendChild(crearCelda(activo.asignadoA));
            fila.appendChild(crearBadgeActivo(activo.estado));
            fila.appendChild(crearCelda(formatearValor(activo.valor)));
            fila.appendChild(crearCelda(`${activo.ultimoMovimiento} - ${activo.observacion}`));

            tablaActivosAdminBody.appendChild(fila);

        });

    }

    function renderDashboardAdmin() {

        if (!dashboardTotalDispositivos) {
            return;
        }

        const ticketsActuales = obtenerTodosLosTickets();
        const activosOperativos = obtenerActivosDesdeTickets();
        const ticketsAbiertos = ticketsActuales.filter((ticket) => ticket.estado === "Abierto" || ticket.estado === "Aceptado");
        const ticketsProceso = ticketsActuales.filter((ticket) => ticket.estado === "En proceso");
        const ticketsCerrados = ticketsActuales.filter((ticket) => ticketEstaTerminado(ticket));

        dashboardTotalDispositivos.textContent = activosOperativos.length;
        dashboardTicketsAbiertos.textContent = ticketsAbiertos.length;
        dashboardTicketsProceso.textContent = ticketsProceso.length;
        dashboardTicketsCerrados.textContent = ticketsCerrados.length;

        renderActividadDashboard(ticketsActuales);
        renderDispositivosDashboard();
        renderFinanzasAdminDashboard(ticketsActuales);

    }

    function renderActividadDashboard(ticketsActuales) {

        if (!dashboardActividadReciente) {
            return;
        }

        dashboardActividadReciente.innerHTML = "<h2>Actividad Reciente</h2>";

        ticketsActuales.slice(-4).reverse().forEach((ticket) => {

            const actividad = document.createElement("article");
            actividad.className = "actividad";
            actividad.innerHTML = `
                <div>
                    <h3>${ticket.estado === "Abierto" ? "Nuevo Ticket Creado" : `Ticket ${ticket.estado}`}</h3>
                    <p>${ticket.dispositivo} - ${ticket.usuario}</p>
                </div>
                <span>${ticket.fecha}</span>
            `;
            dashboardActividadReciente.appendChild(actividad);

        });

    }

    function renderDispositivosDashboard() {

        if (!dashboardDispositivosPopulares) {
            return;
        }

        const conteoDispositivos = obtenerActivosDesdeTickets().reduce((conteo, activo) => {
            const responsable = activo.asignadoA || "Sin tecnico";
            conteo[responsable] = (conteo[responsable] || 0) + 1;
            return conteo;
        }, {});
        const dispositivos = Object.entries(conteoDispositivos)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4);
        const mayorCantidad = Math.max(...dispositivos.map(([, cantidad]) => cantidad), 1);

        dashboardDispositivosPopulares.innerHTML = "<h2>Dispositivos por Tecnicos</h2>";

        dispositivos.forEach(([responsable, cantidad]) => {

            const porcentaje = Math.max((cantidad / mayorCantidad) * 100, 12);
            const dispositivo = document.createElement("article");
            dispositivo.className = "dispositivo";
            dispositivo.innerHTML = `
                <header>
                    <p>${responsable}</p>
                    <span>${cantidad}</span>
                </header>
                <div class="barra">
                    <span style="width: ${porcentaje}%;"></span>
                </div>
            `;
            dashboardDispositivosPopulares.appendChild(dispositivo);

        });

    }

    function obtenerTicketsPagadosAprobados(tickets = obtenerTodosLosTickets()) {

        return tickets.filter((ticket) => ticketPagoAprobado(ticket) && Number(ticket.valorArreglo || 0) > 0);

    }

    function obtenerTicketsTecnicoActual() {

        const tecnicoActual = normalizarTexto(usuarioActual);

        return obtenerTodosLosTickets().filter((ticket) => (
            normalizarTexto(ticket.tecnico || "") === tecnicoActual
        ));

    }

    function sumarValoresTickets(tickets) {

        return tickets.reduce((total, ticket) => total + Number(ticket.valorArreglo || 0), 0);

    }

    function crearFilaListaDashboard(titulo, detalle, valor = "") {

        const item = document.createElement("article");
        item.className = "dashboard-lista-item";
        item.innerHTML = `
            <div>
                <strong>${titulo}</strong>
                <p>${detalle}</p>
            </div>
            <span>${valor}</span>
        `;
        return item;

    }

    function renderGraficaBarras(contenedor, datos, textoVacio) {

        if (!contenedor) {
            return;
        }

        contenedor.innerHTML = "";

        if (datos.length === 0) {
            const vacio = document.createElement("p");
            vacio.className = "dashboard-vacio";
            vacio.textContent = textoVacio;
            contenedor.appendChild(vacio);
            return;
        }

        const mayor = Math.max(...datos.map((dato) => dato.valor), 1);

        datos.forEach((dato) => {
            const porcentaje = Math.max((dato.valor / mayor) * 100, 8);
            const fila = document.createElement("article");
            fila.className = "grafica-fila";
            fila.innerHTML = `
                <header>
                    <span>${dato.label}</span>
                    <strong>${formatearValor(dato.valor)}</strong>
                </header>
                <div class="grafica-linea">
                    <span style="width: ${porcentaje}%;"></span>
                </div>
            `;
            contenedor.appendChild(fila);
        });

    }

    function renderFinanzasAdminDashboard(ticketsActuales) {

        if (!adminIngresosAprobados) {
            return;
        }

        const ticketsPagados = obtenerTicketsPagadosAprobados(ticketsActuales);
        const total = sumarValoresTickets(ticketsPagados);
        const reparto = calcularRepartoValor(total);
        const pagosPendientes = ticketsActuales.filter(ticketPagoPendiente);

        adminIngresosAprobados.textContent = formatearValor(reparto.total);
        adminIngresoEmpresa.textContent = formatearValor(reparto.empresa);
        adminIngresoTecnicos.textContent = formatearValor(reparto.tecnico);
        adminPagosPendientes.textContent = pagosPendientes.length;

        const ingresosPorTecnico = Object.entries(ticketsPagados.reduce((acum, ticket) => {
            const tecnico = ticket.tecnico || "Sin tecnico";
            acum[tecnico] = (acum[tecnico] || 0) + Number(ticket.valorArreglo || 0);
            return acum;
        }, {}))
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([label, valor]) => ({ label, valor }));

        if (adminGraficaIngresos) {
            adminGraficaIngresos.innerHTML = "<h2>Ingresos por tecnico</h2>";
            const contenedor = document.createElement("div");
            contenedor.className = "grafica-barras";
            adminGraficaIngresos.appendChild(contenedor);
            renderGraficaBarras(contenedor, ingresosPorTecnico, "Aun no hay pagos aprobados.");
        }

        if (adminPagosRecientes) {
            adminPagosRecientes.innerHTML = "<h2>Pagos y entregas</h2>";

            const recientes = [...pagosPendientes, ...ticketsPagados].slice(-6).reverse();

            if (recientes.length === 0) {
                const vacio = document.createElement("p");
                vacio.className = "dashboard-vacio";
                vacio.textContent = "No hay movimientos de pago todavia.";
                adminPagosRecientes.appendChild(vacio);
                return;
            }

            recientes.forEach((ticket) => {
                adminPagosRecientes.appendChild(crearFilaListaDashboard(
                    `${ticket.id} - ${ticket.usuario}`,
                    `${obtenerEstadoPago(ticket)} / ${ticket.metodoPago || "Sin metodo"}`,
                    formatearValor(ticket.valorArreglo)
                ));
            });
        }

    }

    function renderDashboardTecnico() {

        if (!dashboardTecnico) {
            return;
        }

        const ticketsTecnicoActual = obtenerTicketsTecnicoActual();
        const ticketsPagados = obtenerTicketsPagadosAprobados(ticketsTecnicoActual);
        const pendientes = ticketsTecnicoActual.filter((ticket) => !["Cerrado", "Listo para entrega"].includes(ticket.estado));
        const total = sumarValoresTickets(ticketsPagados);
        const reparto = calcularRepartoValor(total);

        if (tecGananciaTotal) {
            tecGananciaTotal.textContent = formatearValor(reparto.total);
            tecAporteEmpresa.textContent = formatearValor(reparto.empresa);
            tecGananciaNeta.textContent = formatearValor(reparto.tecnico);
            tecTrabajosPendientes.textContent = pendientes.length;
        }

        renderGraficaBarras(
            tecGraficaIngresos,
            ticketsPagados.slice(-6).reverse().map((ticket) => ({
                label: ticket.id,
                valor: Number(ticket.valorArreglo || 0)
            })),
            "Aun no tienes pagos aprobados."
        );

        if (tecUltimosClientes) {
            tecUltimosClientes.innerHTML = "";
            const ultimos = ticketsTecnicoActual.slice(-5).reverse();

            if (ultimos.length === 0) {
                const vacio = document.createElement("p");
                vacio.className = "dashboard-vacio";
                vacio.textContent = "Todavia no tienes clientes asignados.";
                tecUltimosClientes.appendChild(vacio);
            } else {
                ultimos.forEach((ticket) => {
                    tecUltimosClientes.appendChild(crearFilaListaDashboard(
                        ticket.usuario,
                        `${ticket.dispositivo} / ${ticket.estado}`,
                        ticket.fecha
                    ));
                });
            }
        }

        if (tecListaPendientes) {
            tecListaPendientes.innerHTML = "";

            if (pendientes.length === 0) {
                const vacio = document.createElement("p");
                vacio.className = "dashboard-vacio";
                vacio.textContent = "No tienes trabajos pendientes.";
                tecListaPendientes.appendChild(vacio);
            } else {
                pendientes.slice(0, 5).forEach((ticket) => {
                    tecListaPendientes.appendChild(crearFilaListaDashboard(
                        ticket.id,
                        `${ticket.usuario} / ${ticket.dispositivo}`,
                        ticket.estado
                    ));
                });
            }
        }

        if (tecRepartoIngresos) {
            tecRepartoIngresos.innerHTML = `
                <div>
                    <p>Empresa (${Math.round(porcentajeEmpresa * 100)}%)</p>
                    <strong>${formatearValor(reparto.empresa)}</strong>
                </div>
                <div>
                    <p>Tecnico (${Math.round(porcentajeTecnico * 100)}%)</p>
                    <strong>${formatearValor(reparto.tecnico)}</strong>
                </div>
            `;
        }

    }

    function crearBadgeRol(rolUsuario) {

        const celda = document.createElement("td");
        const badge = document.createElement("span");
        const claseRol = rolUsuario.toLowerCase();

        badge.className = `rol-${claseRol}`;
        badge.textContent = rolUsuario;
        celda.appendChild(badge);

        return celda;

    }

    function aplicarClaseSelectRol(select, rolUsuario) {

        select.className = `select-rol-admin rol-${obtenerValorRolApi(rolUsuario)}`;

    }

    function crearSelectRolAdmin(usuarioRegistrado) {

        const celda = document.createElement("td");
        const select = document.createElement("select");
        const roles = [
            { valor: "usuario", texto: "Usuario" },
            { valor: "admin", texto: "Admin" },
            { valor: "tecnico", texto: "Tecnico" }
        ];
        const valorInicial = obtenerValorRolApi(usuarioRegistrado.rol);

        roles.forEach((rol) => {
            const option = document.createElement("option");
            option.value = rol.valor;
            option.textContent = rol.texto;
            select.appendChild(option);
        });

        select.value = valorInicial;
        aplicarClaseSelectRol(select, valorInicial);

        select.addEventListener("change", async () => {

            const nuevoValor = select.value;
            const nuevoRol = formatearRol(nuevoValor);

            aplicarClaseSelectRol(select, nuevoValor);

            const confirmado = await mostrarConfirmacion({
                titulo: "Cambiar rol",
                texto: `Quieres cambiar la cuenta de ${usuarioRegistrado.nombre} a ${nuevoRol}?`,
                confirmar: "Cambiar rol",
                icono: "fa-solid fa-user-gear"
            });

            if (!confirmado) {
                select.value = valorInicial;
                aplicarClaseSelectRol(select, valorInicial);
                return;
            }

            select.disabled = true;

            try {
                const cuentaActualizada = await actualizarRolCuenta(usuarioRegistrado, nuevoValor);

                alert("Rol actualizado correctamente");

                if (cuentaEsSesionActual(cuentaActualizada) && formatearRol(cuentaActualizada.rol) !== formatearRol(usuarioRegistrado.rol)) {
                    mostrarPantallaSesion(cuentaActualizada);
                    return;
                }

                refrescarPantallasAbiertas();
            } catch (error) {
                select.value = valorInicial;
                aplicarClaseSelectRol(select, valorInicial);
                alert(error.message || "No se pudo actualizar el rol");
            } finally {
                select.disabled = false;
            }

        });

        celda.appendChild(select);
        return celda;

    }

    function claseEstadoTicket(estadoTicket) {

        const estadoNormalizado = normalizarTexto(estadoTicket);

        if (estadoNormalizado === "abierto") {
            return "abierto";
        }

        if (estadoNormalizado === "cerrado" || estadoNormalizado === "reparado" || estadoNormalizado === "listo para entrega") {
            return "cerrado";
        }

        return "proceso";

    }

    function ticketEstaTerminado(ticket) {

        return ["Reparado", "Listo para entrega", "Cerrado"].includes(ticket.estado);

    }

    function obtenerTicketUsuarioActual() {

        const ticketsUsuario = obtenerTodosLosTickets().filter(ticketPerteneceAUsuarioActual);
        const ticketGuardadoId = localStorage.getItem(ticketActualUsuarioKey);
        const ticketGuardado = ticketsUsuario.find((ticket) => ticket.id === ticketGuardadoId);

        if (ticketGuardado) {
            return ticketGuardado;
        }

        return ticketsUsuario[ticketsUsuario.length - 1] || null;

    }

    function obtenerTicketsUsuarioActual() {

        return obtenerTodosLosTickets().filter(ticketPerteneceAUsuarioActual);

    }

    function crearCardEstadoUsuario(ticket) {

        const card = document.createElement("section");
        const terminado = ticketEstaTerminado(ticket);
        const estadoPago = obtenerEstadoPago(ticket);
        const reparto = calcularRepartoValor(ticket.valorArreglo);

        card.className = "estado-ticket-card";
        const detalleServicio = ticket.recogidaDomicilio
            ? `Recogida en casa: ${ticket.direccionRecogida || "Direccion pendiente"}. Tecnico: ${ticket.tecnico}.`
            : `Entrega en sede: ${ticket.sedeCercana || obtenerSedeCercana(ticket.ciudad)}. Tecnico: ${ticket.tecnico}.`;

        card.innerHTML = `
            <div class="estado-ticket-header">
                <div>
                    <span class="ticket-id">${ticket.id}</span>
                    <h2>${ticket.problema}</h2>
                    <p>${ticket.descripcion}</p>
                </div>
                <span class="estado-badge ${claseEstadoTicket(ticket.estado) === "cerrado" ? "reparado" : "proceso"}">${ticket.estado}</span>
            </div>

            <div class="estado-ticket-info">
                <div>
                    <p>Dispositivo</p>
                    <strong>${ticket.dispositivo}</strong>
                </div>
                <div>
                    <p>Prioridad</p>
                    <strong>${ticket.prioridad}</strong>
                </div>
                <div>
                    <p>Tecnico asignado</p>
                    <strong>${ticket.tecnico}</strong>
                </div>
                <div>
                    <p>Fecha</p>
                    <strong>${ticket.fecha}</strong>
                </div>
                <div>
                    <p>Servicio</p>
                    <strong>${ticket.recogidaDomicilio ? "Recogida a domicilio" : "Entrega en sede"}</strong>
                </div>
                <div>
                    <p>${ticket.recogidaDomicilio ? "Direccion" : "Sede cercana"}</p>
                    <strong>${ticket.recogidaDomicilio ? (ticket.direccionRecogida || "Direccion pendiente") : (ticket.sedeCercana || obtenerSedeCercana(ticket.ciudad))}</strong>
                </div>
            </div>

            <div class="estado-mensaje">
                <i class="fa-regular fa-circle-check"></i>
                <div>
                    <h3>${terminado ? "Tu dispositivo ya fue reparado" : "Tu ticket esta en seguimiento"}</h3>
                    <p>${terminado ? `Proceso finalizado. ${detalleServicio}` : `${detalleServicio} Estado actual: ${ticket.estado}.`}</p>
                </div>
            </div>

            <div class="estado-pago ${terminado ? "mostrar" : ""}">
                <div>
                    <p>Valor a pagar</p>
                    <strong>${formatearValor(reparto.total)}</strong>
                </div>
                <div>
                    <p>Comentario del tecnico</p>
                    <strong>${ticket.comentarioTecnico || "Sin comentario tecnico."}</strong>
                </div>
                <div>
                    <p>Estado del pago</p>
                    <strong>${estadoPago}</strong>
                </div>
                <div>
                    <p>Metodo</p>
                    <strong>${ticket.metodoPago || "Sin seleccionar"}</strong>
                </div>
            </div>
        `;

        if (ticketPuedePagarse(ticket) && !ticketPagoPendiente(ticket)) {
            const accionesPago = document.createElement("div");
            const botonPago = document.createElement("button");

            accionesPago.className = "acciones-pago-usuario";
            botonPago.type = "button";
            botonPago.className = "btn-pagar-ticket";
            botonPago.innerHTML = '<i class="fa-solid fa-credit-card"></i>Pagar';
            botonPago.addEventListener("click", async () => {
                const metodoPago = await solicitarMetodoPago(ticket);

                if (!metodoPago) {
                    return;
                }

                actualizarTicket({
                    ...ticket,
                    pagoEstado: pagoPendiente,
                    metodoPago,
                    fechaPago: new Date().toLocaleString("es-CO")
                });
                registrarNotificacionAdmin(
                    ticket,
                    "Pago pendiente de aprobacion",
                    `${ticket.usuario} envio pago de ${formatearValor(ticket.valorArreglo)} por ${ticket.dispositivo}.`
                );
                actualizarEstadoUsuarioActual();
                renderTicketsAdmin();
                renderDashboardAdmin();
                alert("Pago enviado. El administrador debe aprobarlo para autorizar la entrega.");
            });

            accionesPago.appendChild(botonPago);
            card.appendChild(accionesPago);
        }

        if (ticketPagoPendiente(ticket)) {
            const aviso = document.createElement("div");
            aviso.className = "aviso-pago-ticket";
            aviso.innerHTML = `
                <strong>Pago en revision</strong>
                <p>El administrador debe aprobar el pago antes de entregar el dispositivo.</p>
            `;
            card.appendChild(aviso);
        }

        if (ticketPagoAprobado(ticket)) {
            const aviso = document.createElement("div");
            aviso.className = "aviso-pago-ticket aprobado";
            aviso.innerHTML = `
                <strong>Entrega autorizada</strong>
                <p>Tu pago fue aprobado. Ya puedes reclamar el dispositivo.</p>
            `;
            card.appendChild(aviso);
        }

        return card;

    }

    function renderEstadoUsuario() {

        if (!listaTicketsUsuario) {
            return;
        }

        const estadoSeleccionado = filtroEstadoTicketUsuario ? filtroEstadoTicketUsuario.value : "Todos";
        const ticketsUsuario = obtenerTicketsUsuarioActual();
        const ticketsFiltrados = estadoSeleccionado === "Todos"
            ? ticketsUsuario
            : ticketsUsuario.filter((ticket) => ticket.estado === estadoSeleccionado);
        listaTicketsUsuario.innerHTML = "";

        if (ticketsUsuario.length === 0) {

            const vacio = document.createElement("div");
            vacio.className = "estado-vacio";
            vacio.innerHTML = `
                <h3>No tienes tickets creados</h3>
                <p>Crea un ticket para consultar aqui el comentario del tecnico, el precio y el estado del arreglo.</p>
            `;
            listaTicketsUsuario.appendChild(vacio);
            return;

        }

        if (ticketsFiltrados.length === 0) {

            const vacio = document.createElement("div");
            vacio.className = "estado-vacio";
            vacio.innerHTML = `
                <h3>No hay tickets en este estado</h3>
                <p>Cambia el filtro para ver otras solicitudes.</p>
            `;
            listaTicketsUsuario.appendChild(vacio);
            return;

        }

        ticketsFiltrados.slice().reverse().forEach((ticket) => {
            listaTicketsUsuario.appendChild(crearCardEstadoUsuario(ticket));
        });

    }

    function actualizarEstadoUsuarioActual() {

        renderEstadoUsuario();
        renderNotificacionesUsuario();
        renderNotificacionesTecnico();
        renderNotificacionesAdmin();

    }

    function crearSelectEstado(ticket) {

        const celda = document.createElement("td");
        const select = document.createElement("select");
        const estados = ["Abierto", "Aceptado", "En proceso", "Reparado", "Listo para entrega", "Cerrado"];

        select.className = `estado ${claseEstadoTicket(ticket.estado)}`;

        estados.forEach((estado) => {

            const option = document.createElement("option");
            option.value = estado;
            option.textContent = estado;

            if (estado === ticket.estado) {
                option.selected = true;
            }

            select.appendChild(option);

        });

        select.addEventListener("change", () => {

            const ticketActualizado = {
                ...ticket,
                estado: select.value
            };

            actualizarTicket(ticketActualizado);
            actualizarEstadoUsuarioActual();
            renderTicketsAdmin();
            renderTicketsTecnico();
            renderDashboardTecnico();

        });

        celda.appendChild(select);
        return celda;

    }

    function crearBadgePago(ticket) {

        const celda = document.createElement("td");
        const badge = document.createElement("span");
        const estadoPago = obtenerEstadoPago(ticket);

        badge.className = `pago-badge ${normalizarTexto(estadoPago).replace(/\s+/g, "-")}`;
        badge.textContent = estadoPago;
        celda.appendChild(badge);

        return celda;

    }

    function obtenerBorradorDetalleAdmin(formulario) {

        const campos = formulario.elements;

        return {
            problema: campos.problema.value,
            dispositivo: campos.dispositivo.value,
            ciudad: campos.ciudad.value,
            tecnico: campos.tecnico.value,
            estado: campos.estado.value,
            prioridad: campos.prioridad.value,
            valorArreglo: campos.valorArreglo.value || "0",
            recogidaDomicilio: campos.recogidaDomicilio.value,
            direccionRecogida: campos.direccionRecogida.value,
            sedeCercana: campos.sedeCercana.value,
            descripcion: campos.descripcion.value,
            comentarioTecnico: campos.comentarioTecnico.value
        };

    }

    function capturarDetalleAdminAbierto() {

        const filaDetalle = tablaTicketsAdminBody?.querySelector(".fila-detalle-admin.mostrar");

        if (!filaDetalle) {
            detalleAdminAbierto = null;
            return;
        }

        const ticketId = filaDetalle.id.replace("admin-detalle-", "");
        const modo = filaDetalle.dataset.modo || "ver";
        const formulario = filaDetalle.querySelector(".form-admin-ticket");

        detalleAdminAbierto = { ticketId, modo };

        if (formulario) {
            borradoresDetalleAdmin.set(ticketId, obtenerBorradorDetalleAdmin(formulario));
        }

    }

    function restaurarDetalleAdminAbierto(ticketsAdmin) {

        if (!detalleAdminAbierto) {
            return;
        }

        const ticket = ticketsAdmin.find((item) => item.id === detalleAdminAbierto.ticketId);
        const filaDetalle = document.getElementById(`admin-detalle-${detalleAdminAbierto.ticketId}`);

        if (!ticket || !filaDetalle) {
            detalleAdminAbierto = null;
            return;
        }

        mostrarDetalleAdmin(filaDetalle, ticket, detalleAdminAbierto.modo);

    }

    function renderTicketsAdmin() {

        if (!tablaTicketsAdminBody) {

            return;

        }

        capturarDetalleAdminAbierto();
        tablaTicketsAdminBody.hidden = false;
        const ticketsAdmin = obtenerTodosLosTickets();

        tablaTicketsAdminBody.innerHTML = "";

        if (adminTicketsTotal) {
            adminTicketsTotal.textContent = ticketsAdmin.length;
            adminTicketsAbiertos.textContent = ticketsAdmin.filter((ticket) => ticket.estado === "Abierto" || ticket.estado === "Aceptado").length;
            adminTicketsProceso.textContent = ticketsAdmin.filter((ticket) => ticket.estado === "En proceso").length;
            adminTicketsCerrados.textContent = ticketsAdmin.filter((ticket) => ticketEstaTerminado(ticket)).length;
        }

        ticketsAdmin.forEach((ticket) => {

            const fila = document.createElement("tr");
            const detalle = crearDetalleAdmin(ticket);

            fila.appendChild(crearCelda(ticket.id));
            fila.appendChild(crearCelda(ticket.usuario));
            fila.appendChild(crearCelda(ticket.ciudad));
            fila.appendChild(crearCelda(ticket.dispositivo));
            fila.appendChild(crearSelectEstado(ticket));

            const prioridad = document.createElement("td");
            const prioridadTexto = document.createElement("span");
            prioridadTexto.className = `prioridad ${normalizarTexto(ticket.prioridad)}`;
            prioridadTexto.textContent = ticket.prioridad;
            prioridad.appendChild(prioridadTexto);
            fila.appendChild(prioridad);

            fila.appendChild(crearCelda(ticket.tecnico));
            fila.appendChild(crearBadgePago(ticket));

            const acciones = document.createElement("td");
            acciones.className = "acciones-ticket";
            acciones.appendChild(crearAccionAdmin("ver", "Ver ticket", "fa-regular fa-eye", () => {
                mostrarDetalleAdmin(detalle, ticket, "ver");
            }));
            acciones.appendChild(crearAccionAdmin("editar", "Editar ticket", "fa-solid fa-pen", () => {
                mostrarDetalleAdmin(detalle, ticket, "editar");
            }));
            acciones.appendChild(crearAccionAdmin("eliminar", "Eliminar ticket", "fa-solid fa-trash", async () => {

                const confirmado = await mostrarConfirmacion({
                    titulo: "Eliminar ticket",
                    texto: `Quieres eliminar el ticket ${ticket.id}?`,
                    confirmar: "Eliminar",
                    peligro: true,
                    icono: "fa-solid fa-trash"
                });

                if (!confirmado) {
                    return;
                }

                eliminarTicket(ticket.id);
                actualizarEstadoUsuarioActual();
                renderTicketsAdmin();
                renderTicketsTecnico();

            }));
            fila.appendChild(acciones);

            tablaTicketsAdminBody.appendChild(fila);
            tablaTicketsAdminBody.appendChild(detalle);

        });

        restaurarDetalleAdminAbierto(ticketsAdmin);
        renderDashboardAdmin();

    }

    function crearAccionAdmin(tipo, titulo, icono, accion) {

        const boton = document.createElement("button");

        boton.className = `btn-accion-admin ${tipo}`;
        boton.type = "button";
        boton.title = titulo;
        boton.innerHTML = `<i class="${icono}"></i>`;
        boton.addEventListener("click", accion);

        return boton;

    }

    function crearDetalleAdmin(ticket) {

        const fila = document.createElement("tr");
        const celda = document.createElement("td");

        fila.className = "fila-detalle-admin";
        fila.id = `admin-detalle-${ticket.id}`;
        celda.colSpan = 9;
        fila.appendChild(celda);

        return fila;

    }

    function mostrarDetalleAdmin(filaDetalle, ticket, modo) {

        const celda = filaDetalle.querySelector("td");
        const estaAbierto = filaDetalle.classList.contains("mostrar");
        const mismoModo = filaDetalle.dataset.modo === modo;

        document.querySelectorAll(".fila-detalle-admin").forEach((fila) => {
            fila.classList.remove("mostrar");
            fila.dataset.modo = "";
        });

        if (estaAbierto && mismoModo) {
            detalleAdminAbierto = null;
            borradoresDetalleAdmin.delete(ticket.id);
            return;
        }

        celda.innerHTML = "";
        filaDetalle.dataset.modo = modo;
        detalleAdminAbierto = { ticketId: ticket.id, modo };

        if (modo === "ver") {
            celda.appendChild(crearVistaTicketAdmin(ticket));
        } else {
            celda.appendChild(crearFormularioTicketAdmin(ticket));
        }

        filaDetalle.classList.add("mostrar");

    }

    function crearVistaTicketAdmin(ticket) {

        const contenedor = document.createElement("div");
        const campos = [
            ["ID", ticket.id],
            ["Usuario", ticket.usuario],
            ["Ciudad", ticket.ciudad],
            ["Dispositivo", ticket.dispositivo],
            ["Problema", ticket.problema],
            ["Descripcion", ticket.descripcion],
            ["Estado", ticket.estado],
            ["Prioridad", ticket.prioridad],
            ["Tecnico", ticket.tecnico],
            ["Servicio", ticket.recogidaDomicilio ? "Recogida a domicilio" : "Entrega en sede"],
            [ticket.recogidaDomicilio ? "Direccion de recogida" : "Sede cercana", ticket.recogidaDomicilio ? (ticket.direccionRecogida || "Direccion pendiente") : (ticket.sedeCercana || obtenerSedeCercana(ticket.ciudad))],
            ["Valor", formatearValor(ticket.valorArreglo)],
            ["Estado pago", obtenerEstadoPago(ticket)],
            ["Metodo pago", ticket.metodoPago || "Sin seleccionar"],
            ["Comentario tecnico", ticket.comentarioTecnico || "Sin comentario tecnico."]
        ];

        contenedor.className = "detalle-admin-card";

        campos.forEach(([etiqueta, valor]) => {

            const item = document.createElement("div");
            const label = document.createElement("p");
            const texto = document.createElement("strong");

            label.textContent = etiqueta;
            texto.textContent = valor;
            item.appendChild(label);
            item.appendChild(texto);
            contenedor.appendChild(item);

        });

        if (ticketPagoPendiente(ticket)) {
            const acciones = document.createElement("div");
            const boton = document.createElement("button");

            acciones.className = "acciones-aprobacion-pago";
            boton.type = "button";
            boton.className = "btn-aprobar-pago";
            boton.innerHTML = '<i class="fa-solid fa-check"></i>Aprobar pago y entrega';
            boton.addEventListener("click", async () => {
                const confirmado = await mostrarConfirmacion({
                    titulo: "Aprobar pago",
                    texto: `Aprobar el pago de ${ticket.usuario} por ${formatearValor(ticket.valorArreglo)} y autorizar entrega?`,
                    confirmar: "Aprobar",
                    icono: "fa-solid fa-circle-check"
                });

                if (!confirmado) {
                    return;
                }

                actualizarTicket({
                    ...ticket,
                    estado: "Cerrado",
                    pagoEstado: pagoAprobado,
                    fechaPagoAprobado: new Date().toLocaleString("es-CO")
                });
                actualizarEstadoUsuarioActual();
                renderTicketsAdmin();
                renderTicketsTecnico();
                renderDashboardTecnico();
                renderDashboardAdmin();
                alert("Pago aprobado. Entrega autorizada.");
            });

            acciones.appendChild(boton);
            contenedor.appendChild(acciones);
        }

        return contenedor;

    }

    function crearFormularioTicketAdmin(ticket) {

        const formulario = document.createElement("form");
        const estados = ["Abierto", "Aceptado", "En proceso", "Reparado", "Listo para entrega", "Cerrado"];
        const prioridades = ["Baja", "Media", "Alta"];
        const borrador = borradoresDetalleAdmin.get(ticket.id);

        formulario.className = "form-admin-ticket";
        formulario.innerHTML = `
            <div>
                <label>Problema</label>
                <input name="problema" type="text" maxlength="80" required>
            </div>
            <div>
                <label>Dispositivo</label>
                <input name="dispositivo" type="text" maxlength="80" required>
            </div>
            <div>
                <label>Ciudad</label>
                <input name="ciudad" type="text" maxlength="60" required>
            </div>
            <div>
                <label>Tecnico</label>
                <input name="tecnico" type="text" maxlength="80" required>
            </div>
            <div>
                <label>Estado</label>
                <select name="estado">${estados.map((estado) => `<option value="${estado}">${estado}</option>`).join("")}</select>
            </div>
            <div>
                <label>Prioridad</label>
                <select name="prioridad">${prioridades.map((prioridad) => `<option value="${prioridad}">${prioridad}</option>`).join("")}</select>
            </div>
            <div>
                <label>Valor a pagar</label>
                <input name="valorArreglo" type="number" min="0" step="1000">
            </div>
            <div>
                <label>Servicio</label>
                <select name="recogidaDomicilio">
                    <option value="false">Entrega en sede</option>
                    <option value="true">Recogida a domicilio</option>
                </select>
            </div>
            <div class="campo-completo-admin">
                <label>Direccion de recogida</label>
                <input name="direccionRecogida" type="text" maxlength="180">
            </div>
            <div class="campo-completo-admin">
                <label>Sede cercana</label>
                <input name="sedeCercana" type="text" maxlength="180">
            </div>
            <div class="campo-completo-admin">
                <label>Descripcion</label>
                <textarea name="descripcion" maxlength="220" required></textarea>
            </div>
            <div class="campo-completo-admin">
                <label>Comentario tecnico</label>
                <textarea name="comentarioTecnico" maxlength="220"></textarea>
            </div>
            <button type="submit"><i class="fa-regular fa-floppy-disk"></i>Guardar cambios</button>
        `;

        const campos = formulario.elements;

        campos.problema.value = borrador?.problema ?? ticket.problema;
        campos.dispositivo.value = borrador?.dispositivo ?? ticket.dispositivo;
        campos.ciudad.value = borrador?.ciudad ?? ticket.ciudad;
        campos.tecnico.value = borrador?.tecnico ?? ticket.tecnico;
        campos.estado.value = borrador?.estado ?? ticket.estado;
        campos.prioridad.value = borrador?.prioridad ?? ticket.prioridad;
        campos.valorArreglo.value = borrador?.valorArreglo ?? ticket.valorArreglo ?? "0";
        campos.recogidaDomicilio.value = borrador?.recogidaDomicilio ?? (ticket.recogidaDomicilio ? "true" : "false");
        campos.direccionRecogida.value = borrador?.direccionRecogida ?? ticket.direccionRecogida ?? "";
        campos.sedeCercana.value = borrador?.sedeCercana ?? ticket.sedeCercana ?? obtenerSedeCercana(ticket.ciudad);
        campos.descripcion.value = borrador?.descripcion ?? ticket.descripcion;
        campos.comentarioTecnico.value = borrador?.comentarioTecnico ?? ticket.comentarioTecnico ?? "";

        formulario.addEventListener("input", () => {
            borradoresDetalleAdmin.set(ticket.id, obtenerBorradorDetalleAdmin(formulario));
        });

        formulario.addEventListener("change", () => {
            borradoresDetalleAdmin.set(ticket.id, obtenerBorradorDetalleAdmin(formulario));
        });

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            actualizarTicket({
                ...ticket,
                problema: campos.problema.value,
                dispositivo: campos.dispositivo.value,
                ciudad: campos.ciudad.value,
                tecnico: campos.tecnico.value,
                estado: campos.estado.value,
                prioridad: campos.prioridad.value,
                valorArreglo: campos.valorArreglo.value || "0",
                recogidaDomicilio: campos.recogidaDomicilio.value === "true",
                direccionRecogida: campos.direccionRecogida.value,
                sedeCercana: campos.sedeCercana.value,
                descripcion: campos.descripcion.value,
                comentarioTecnico: campos.comentarioTecnico.value || "Sin comentario tecnico."
            });

            actualizarEstadoUsuarioActual();
            detalleAdminAbierto = null;
            borradoresDetalleAdmin.delete(ticket.id);
            renderTicketsAdmin();
            renderTicketsTecnico();
            alert("Ticket actualizado correctamente");

        });

        return formulario;

    }

    function formatearValor(valor) {

        const numero = Number(valor);

        if (!numero) {
            return "$0";
        }

        return `$${numero.toLocaleString("es-CO")}`;

    }

    function crearBadgeEstado(estadoTicket) {

        const celda = document.createElement("td");
        const badge = document.createElement("span");

        badge.className = `estado ${claseEstadoTicket(estadoTicket)}`;
        badge.textContent = estadoTicket;
        celda.appendChild(badge);

        return celda;

    }

    function crearCeldaIngresoTecnico(ticket) {

        const celda = document.createElement("td");
        const reparto = calcularRepartoValor(ticket.valorArreglo);
        const estadoPago = obtenerEstadoPago(ticket);

        celda.innerHTML = `
            <strong>${formatearValor(reparto.total)}</strong>
            <p>${ticketPagoAprobado(ticket) ? `Tu parte: ${formatearValor(reparto.tecnico)}` : estadoPago}</p>
        `;

        return celda;

    }

    function obtenerBorradorDetalleTecnico(ticketId, formulario) {

        return {
            estado: formulario.querySelector(".input-detalle-estado").value,
            valorArreglo: formulario.querySelector(".input-detalle-valor").value || "0",
            comentarioTecnico: formulario.querySelector(".input-detalle-comentario").value
        };

    }

    function guardarDetallesTecnicoActivos() {

        if (!tablaTicketsTecnicoBody) {
            return;
        }

        tablaTicketsTecnicoBody.querySelectorAll(".fila-detalle-tecnico").forEach((filaDetalle) => {

            const ticketId = filaDetalle.id.replace("detalle-", "");
            const formulario = filaDetalle.querySelector(".form-detalle-tecnico");

            if (filaDetalle.classList.contains("mostrar")) {
                detallesTecnicoAbiertos.add(ticketId);

                if (formulario) {
                    borradoresDetalleTecnico.set(ticketId, obtenerBorradorDetalleTecnico(ticketId, formulario));
                }

            } else {
                detallesTecnicoAbiertos.delete(ticketId);
                borradoresDetalleTecnico.delete(ticketId);
            }

        });

    }

    function crearAccionTecnico(ticket) {

        const celda = document.createElement("td");
        celda.className = "acciones-tecnico-ticket";

        if (ticket.estado === "Abierto") {
            const botonAceptar = document.createElement("button");
            const botonRechazar = document.createElement("button");

            botonAceptar.className = "btn-accion-tecnico aceptar";
            botonAceptar.type = "button";
            botonAceptar.title = "Aceptar trabajo";
            botonAceptar.innerHTML = '<i class="fa-solid fa-check"></i>';
            botonAceptar.addEventListener("click", () => aceptarTrabajoTecnico(ticket));

            botonRechazar.className = "btn-accion-tecnico rechazar";
            botonRechazar.type = "button";
            botonRechazar.title = "Rechazar trabajo";
            botonRechazar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            botonRechazar.addEventListener("click", () => rechazarTrabajoTecnico(ticket));

            celda.appendChild(botonAceptar);
            celda.appendChild(botonRechazar);
            return celda;
        }

        const boton = document.createElement("button");

        boton.className = "btn-accion-tecnico editar";
        boton.type = "button";
        boton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        boton.title = "Actualizar ticket";

        boton.addEventListener("click", () => {

            const detalle = document.getElementById(`detalle-${ticket.id}`);

            if (detalle) {

                const mostrarDetalle = detalle.classList.toggle("mostrar");

                if (mostrarDetalle) {
                    detallesTecnicoAbiertos.add(ticket.id);
                } else {
                    detallesTecnicoAbiertos.delete(ticket.id);
                }

            }

        });

        celda.appendChild(boton);
        return celda;

    }

    function refrescarTicketsDespuesAccionTecnico() {

        actualizarEstadoUsuarioActual();
        renderTicketsAdmin();
        renderTicketsTecnico();
        renderDashboardAdmin();
        renderDashboardTecnico();

    }

    function aceptarTrabajoTecnico(ticket) {

        actualizarTicket({
            ...ticket,
            estado: "Aceptado",
            comentarioTecnico: "Trabajo aceptado por el tecnico. El diagnostico iniciara pronto."
        });
        refrescarTicketsDespuesAccionTecnico();
        alert("Trabajo aceptado correctamente.");

    }

    async function rechazarTrabajoTecnico(ticket) {

        const confirmado = await mostrarConfirmacion({
            titulo: "Rechazar trabajo",
            texto: `Quieres rechazar el ticket ${ticket.id}? Quedara abierto para que el administrador lo reasigne.`,
            confirmar: "Rechazar",
            cancelar: "Volver",
            peligro: true,
            icono: "fa-solid fa-xmark"
        });

        if (!confirmado) {
            return;
        }

        const ticketActualizado = {
            ...ticket,
            estado: "Abierto",
            tecnico: "Sin asignar",
            comentarioTecnico: `${usuarioActual} rechazo este trabajo. Pendiente de reasignacion.`
        };

        actualizarTicket(ticketActualizado);
        registrarNotificacionAdmin(
            ticketActualizado,
            "Ticket rechazado por tecnico",
            `${usuarioActual} rechazo ${ticket.id}. Debes reasignarlo desde Tickets.`
        );
        refrescarTicketsDespuesAccionTecnico();
        alert("Trabajo rechazado. El administrador podra reasignarlo.");

    }

    function crearDetalleTecnico(ticket) {

        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        const estados = ["Aceptado", "En proceso", "Reparado", "Listo para entrega", "Cerrado"];
        const borrador = borradoresDetalleTecnico.get(ticket.id);
        const estadoSeleccionado = borrador?.estado || ticket.estado;
        const valorArreglo = borrador?.valorArreglo ?? ticket.valorArreglo ?? 0;
        const comentarioTecnico = borrador?.comentarioTecnico ?? ticket.comentarioTecnico ?? "";

        fila.id = `detalle-${ticket.id}`;
        fila.className = "fila-detalle-tecnico";

        if (detallesTecnicoAbiertos.has(ticket.id)) {
            fila.classList.add("mostrar");
        }

        celda.colSpan = 10;

        const formulario = document.createElement("form");
        formulario.className = "form-detalle-tecnico";
        formulario.innerHTML = `
            <div class="detalle-comentario">
                <label>Datos del cliente</label>
                <p>${ticket.usuario} - ${ticket.recogidaDomicilio ? `Recoger en: ${ticket.direccionRecogida || "Direccion pendiente"}` : `Entrega en sede: ${ticket.sedeCercana || obtenerSedeCercana(ticket.ciudad)}`}</p>
            </div>
            <div>
                <label>Estado del arreglo</label>
                <select class="input-detalle-estado">
                    ${estados.map((estado) => `<option value="${estado}" ${estado === estadoSeleccionado ? "selected" : ""}>${estado}</option>`).join("")}
                </select>
            </div>
            <div>
                <label>Valor a pagar</label>
                <input class="input-detalle-valor" type="number" min="0" step="1000" value="${valorArreglo}">
            </div>
            <div class="detalle-comentario">
                <label>Comentario tecnico</label>
                <textarea class="input-detalle-comentario" maxlength="220">${comentarioTecnico}</textarea>
            </div>
            <button type="submit"><i class="fa-regular fa-floppy-disk"></i>Guardar actualizacion</button>
        `;

        formulario.addEventListener("input", () => {
            borradoresDetalleTecnico.set(ticket.id, obtenerBorradorDetalleTecnico(ticket.id, formulario));
        });

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            const ticketActualizado = {
                ...ticket,
                estado: formulario.querySelector(".input-detalle-estado").value,
                valorArreglo: formulario.querySelector(".input-detalle-valor").value || "0",
                comentarioTecnico: formulario.querySelector(".input-detalle-comentario").value || "Sin comentario tecnico."
            };

            actualizarTicket(ticketActualizado);
            actualizarEstadoUsuarioActual();
            borradoresDetalleTecnico.delete(ticket.id);
            detallesTecnicoAbiertos.delete(ticket.id);
            formulario.closest(".fila-detalle-tecnico")?.classList.remove("mostrar");
            renderTicketsAdmin();
            renderTicketsTecnico();

            alert("Ticket actualizado correctamente");

        });

        celda.appendChild(formulario);
        fila.appendChild(celda);

        return fila;

    }

    function renderTicketsTecnico() {

        if (!tablaTicketsTecnicoBody) {

            return;

        }

        tablaTicketsTecnicoBody.hidden = false;
        renderNotificacionesTecnico();
        const tecnicoActual = normalizarTexto(usuarioActual);
        const ticketsAsignados = obtenerTodosLosTickets().filter((ticket) => (
            normalizarTexto(ticket.tecnico || "") === tecnicoActual
        ));
        guardarDetallesTecnicoActivos();
        tablaTicketsTecnicoBody.innerHTML = "";

        if (tecTicketsAbiertos) {
            tecTicketsAbiertos.textContent = ticketsAsignados.filter((ticket) => ticket.estado === "Abierto" || ticket.estado === "Aceptado").length;
            tecTicketsProceso.textContent = ticketsAsignados.filter((ticket) => ticket.estado === "En proceso").length;
            tecTicketsTerminados.textContent = ticketsAsignados.filter((ticket) => ["Reparado", "Listo para entrega", "Cerrado"].includes(ticket.estado)).length;
        }

        ticketsAsignados.forEach((ticket) => {

            const fila = document.createElement("tr");
            const problema = document.createElement("td");

            problema.innerHTML = `
                <p class="problema-ticket-tecnico">${ticket.problema}</p>
                <p>${ticket.fecha}</p>
                <p>${ticket.recogidaDomicilio ? `Recogida: ${ticket.direccionRecogida || "Direccion pendiente"}` : `Sede: ${ticket.sedeCercana || obtenerSedeCercana(ticket.ciudad)}`}</p>
            `;

            fila.appendChild(crearCelda(ticket.id));
            fila.appendChild(crearCelda(ticket.usuario));
            fila.appendChild(crearCelda(ticket.ciudad));
            fila.appendChild(crearCelda(ticket.dispositivo));
            fila.appendChild(problema);
            fila.appendChild(crearBadgeEstado(ticket.estado));

            const prioridad = document.createElement("td");
            const prioridadTexto = document.createElement("span");
            prioridadTexto.className = `prioridad ${normalizarTexto(ticket.prioridad)}`;
            prioridadTexto.textContent = ticket.prioridad;
            prioridad.appendChild(prioridadTexto);
            fila.appendChild(prioridad);

            fila.appendChild(crearCelda(ticket.tecnico));
            fila.appendChild(crearCeldaIngresoTecnico(ticket));
            fila.appendChild(crearAccionTecnico(ticket));

            tablaTicketsTecnicoBody.appendChild(fila);
            tablaTicketsTecnicoBody.appendChild(crearDetalleTecnico(ticket));

        });

        renderDashboardTecnico();

    }

    function renderRegistradosAdmin() {

        if (!tablaRegistradosBody) {

            return;

        }

        const usuariosPorCorreo = new Map();

        const usuariosFuente = apiDisponible
            ? obtenerRegistrados()
            : [...cuentasEspeciales, ...usuariosNormalesBase, ...obtenerRegistrados()];

        usuariosFuente.forEach((usuarioRegistrado) => {
            usuariosPorCorreo.set(normalizarTexto(usuarioRegistrado.correo), {
                ...usuarioRegistrado,
                rol: formatearRol(usuarioRegistrado.rol)
            });
        });

        const registrados = Array.from(usuariosPorCorreo.values()).sort((a, b) => {
            const ordenRoles = { Admin: 1, Tecnico: 2, Usuario: 3 };
            return (ordenRoles[a.rol] || 4) - (ordenRoles[b.rol] || 4) || a.nombre.localeCompare(b.nombre);
        });
        const usuariosNormales = registrados.filter((usuarioRegistrado) => usuarioRegistrado.rol === "Usuario");
        const tecnicosRegistrados = registrados.filter((usuarioRegistrado) => usuarioRegistrado.rol === "Tecnico");
        const adminsRegistrados = registrados.filter((usuarioRegistrado) => usuarioRegistrado.rol === "Admin");
        tablaRegistradosBody.innerHTML = "";

        registrados.forEach((usuarioRegistrado) => {

            const fila = document.createElement("tr");

            fila.appendChild(crearCelda(usuarioRegistrado.nombre));
            fila.appendChild(crearSelectRolAdmin(usuarioRegistrado));
            fila.appendChild(crearCelda(usuarioRegistrado.correo));
            fila.appendChild(crearCelda(usuarioRegistrado.password || usuarioRegistrado.passwordDemo || ""));
            fila.appendChild(crearCelda(usuarioRegistrado.ciudad));
            fila.appendChild(crearCelda(usuarioRegistrado.pais));
            fila.appendChild(crearCelda(formatearFechaCuenta(usuarioRegistrado.nacimiento)));
            fila.appendChild(crearCelda(usuarioRegistrado.estado));

            const acciones = document.createElement("td");
            acciones.className = "acciones-ticket";
            acciones.appendChild(crearAccionAdmin("eliminar", "Eliminar cuenta", "fa-solid fa-trash", async () => {
                const confirmado = await mostrarConfirmacion({
                    titulo: "Eliminar cuenta",
                    texto: `Quieres eliminar la cuenta de ${usuarioRegistrado.nombre}? Se borraran tambien sus tickets.`,
                    confirmar: "Eliminar",
                    peligro: true,
                    icono: "fa-solid fa-trash"
                });

                if (!confirmado) {
                    return;
                }

                try {
                    await eliminarCuenta(usuarioRegistrado);

                    if (normalizarTexto(usuarioRegistrado.correo) === normalizarTexto(correoUsuarioActual)) {
                        cerrarSesionActual();
                    }

                    renderRegistradosAdmin();
                    renderTicketsAdmin();
                    renderTicketsTecnico();
                    actualizarEstadoUsuarioActual();
                    alert("Cuenta eliminada correctamente");
                } catch (error) {
                    alert(error.message || "No se pudo eliminar la cuenta");
                }
            }));
            fila.appendChild(acciones);

            tablaRegistradosBody.appendChild(fila);

        });

        totalRegistradosAdmin.textContent = registrados.length;
        totalUsuariosRegistrados.textContent = usuariosNormales.length;
        totalTecnicosRegistrados.textContent = tecnicosRegistrados.length;
        totalAdminsRegistrados.textContent = adminsRegistrados.length;

    }

    function mostrarLogin() {

        form.style.display = "flex";
        formRegistro.style.display = "none";
        login.classList.remove("register-active");

    }

    function mostrarRegistro() {

        form.style.display = "none";
        formRegistro.style.display = "flex";
        login.classList.add("register-active");

    }

    function guardarSesion(datosSesion) {

        localStorage.setItem(sesionActualKey, JSON.stringify({
            id: datosSesion.id || null,
            nombre: datosSesion.nombre,
            nombreBase: datosSesion.nombreBase || obtenerPartesNombreCuenta(datosSesion).nombre,
            apellidos: datosSesion.apellidos || obtenerPartesNombreCuenta(datosSesion).apellidos,
            correo: datosSesion.correo,
            rol: formatearRol(datosSesion.rol)
        }));

    }

    function obtenerSesionGuardada() {

        const datos = localStorage.getItem(sesionActualKey);

        if (!datos) return null;

        try {
            return JSON.parse(datos);
        } catch (error) {
            return null;
        }

    }

    function reconciliarSesionConCuentaActual() {

        const sesion = obtenerSesionGuardada();

        if (!sesion) {
            return false;
        }

        const cuentaActualizada = obtenerRegistrados().find((cuenta) => {
            const mismoId = cuenta.id && sesion.id && String(cuenta.id) === String(sesion.id);
            const mismoCorreo = cuenta.correo && sesion.correo && normalizarTexto(cuenta.correo) === normalizarTexto(sesion.correo);
            return mismoId || mismoCorreo;
        });

        if (!cuentaActualizada) {
            return false;
        }

        const datosSesionActualizados = {
            ...sesion,
            id: cuentaActualizada.id || sesion.id || null,
            nombre: cuentaActualizada.nombre || sesion.nombre,
            nombreBase: cuentaActualizada.nombreBase || sesion.nombreBase || obtenerPartesNombreCuenta(cuentaActualizada).nombre,
            apellidos: cuentaActualizada.apellidos || sesion.apellidos || obtenerPartesNombreCuenta(cuentaActualizada).apellidos,
            correo: cuentaActualizada.correo || sesion.correo,
            rol: formatearRol(cuentaActualizada.rol || sesion.rol)
        };
        const cambioRol = formatearRol(sesion.rol) !== datosSesionActualizados.rol;
        const cambioDatos = datosSesionActualizados.nombre !== sesion.nombre
            || datosSesionActualizados.correo !== sesion.correo
            || String(datosSesionActualizados.id || "") !== String(sesion.id || "");

        if (!cambioRol && !cambioDatos) {
            return false;
        }

        usuarioActual = datosSesionActualizados.nombre;
        correoUsuarioActual = datosSesionActualizados.correo;
        usuarioActualId = datosSesionActualizados.id || usuarioActualId;
        rolUsuarioActual = datosSesionActualizados.rol;
        guardarSesion(datosSesionActualizados);
        actualizarPerfilVisible(datosSesionActualizados);

        if (cambioRol) {
            mostrarPantallaSesion(datosSesionActualizados, false);
            return true;
        }

        return false;

    }

    function actualizarFooterSesion(visible) {

        if (footerApp) {
            footerApp.hidden = !visible;
        }

    }

    function mostrarPantallaSesion(datosSesion, debeGuardarSesion = true) {

        const valor = normalizarTexto(datosSesion.rol);

        usuarioActual = datosSesion.nombre;
        correoUsuarioActual = datosSesion.correo;
        usuarioActualId = datosSesion.id || usuarioActualId;
        rolUsuarioActual = formatearRol(datosSesion.rol);

        if (debeGuardarSesion) {
            guardarSesion(datosSesion);
        }

        login.style.display = "none";
        pantallaUsuario.style.display = "none";
        pantallaAdmin.style.display = "none";
        pantallaTecnico.style.display = "none";
        actualizarFooterSesion(true);

        if (valor === "usuario") {
            nombrePerfilUsuario.textContent = usuarioActual;
            pantallaUsuario.style.display = "block";
            actualizarEstadoUsuarioActual();
            mostrarCrearTicketUsuario();
            return;
        }

        if (valor === "admin") {
            if (nombrePerfilAdmin) {
                nombrePerfilAdmin.textContent = datosSesion.nombre;
            }

            pantallaAdmin.style.display = "flex";
            dashboard.style.display = "block";
            activos.style.display = "none";
            registradosAdmin.style.display = "none";
            renderRegistradosAdmin();
            renderTicketsAdmin();
            renderActivosAdmin();
            renderDashboardAdmin();
            renderNotificacionesAdmin();

            if (tickets) {
                tickets.style.display = "none";
            }

            return;
        }

        if (valor === "tecnico") {
            if (nombrePerfilTecnico) {
                nombrePerfilTecnico.textContent = datosSesion.nombre;
            }

            pantallaTecnico.style.display = "flex";
            mostrarDashboardTecnico();
            renderTicketsTecnico();
        }

    }

    function activarMenuTecnico(botonActivo) {

        [btnDashboardTecnico, btnTicketsTecnico].forEach((boton) => {
            if (boton && boton.parentElement) {
                boton.parentElement.classList.remove("activo");
            }
        });

        if (botonActivo && botonActivo.parentElement) {
            botonActivo.parentElement.classList.add("activo");
        }

    }

    function mostrarDashboardTecnico() {

        if (dashboardTecnico) {
            dashboardTecnico.style.display = "flex";
        }

        if (ticketsTecnico) {
            ticketsTecnico.style.display = "none";
        }

        renderDashboardTecnico();
        activarMenuTecnico(btnDashboardTecnico);

    }

    function mostrarTicketsTecnico() {

        if (dashboardTecnico) {
            dashboardTecnico.style.display = "none";
        }

        if (ticketsTecnico) {
            ticketsTecnico.style.display = "flex";
        }

        renderTicketsTecnico();
        activarMenuTecnico(btnTicketsTecnico);

    }

    function emitirSincronizacion() {

        localStorage.setItem(sincronizacionKey, String(Date.now()));

    }

    function refrescarPantallasAbiertas() {

        renderRegistradosAdmin();
        renderTicketsAdmin();
        renderTicketsTecnico();
        renderActivosAdmin();
        renderDashboardAdmin();
        renderDashboardTecnico();
        renderNotificacionesAdmin();
        actualizarEstadoUsuarioActual();

    }

    async function sincronizarDatos() {

        await cargarDatosDesdeApi();

        if (!reconciliarSesionConCuentaActual()) {
            refrescarPantallasAbiertas();
        }

    }

    btnMostrarRegistro.addEventListener("click", mostrarRegistro);
    btnVolverLogin.addEventListener("click", mostrarLogin);
    btnIrLogin.addEventListener("click", mostrarLogin);

    [registroNombre, registroApellidos, adminCrearNombre, adminCrearApellidos, ajustesNombre, ajustesApellidos].forEach(activarFiltroNombre);

    document.querySelectorAll(".btn-menu-toggle").forEach((botonMenu) => {

        botonMenu.addEventListener("click", () => {

            const menu = document.getElementById(botonMenu.dataset.menuTarget);

            if (!menu) return;

            menu.classList.toggle("menu-abierto");
            const abierto = menu.classList.contains("menu-abierto");
            botonMenu.setAttribute("aria-label", abierto ? "Cerrar menu" : "Abrir menu");
            botonMenu.innerHTML = abierto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';

        });

    });

    function cerrarMenusDesplegables() {

        document.querySelectorAll(".nav-usuario.menu-abierto").forEach((menu) => {
            menu.classList.remove("menu-abierto");
        });

        document.querySelectorAll(".btn-menu-toggle").forEach((botonMenu) => {
            botonMenu.setAttribute("aria-label", "Abrir menu");
            botonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });

    }

    function abrirAjustesCuenta() {

        const sesion = obtenerDatosSesionActual();

        if (!sesion.id && !usuarioActualId) {
            alert("Inicia sesion con una cuenta guardada en MySQL para cambiar tus datos.");
            return;
        }

        const partesNombre = obtenerPartesNombreCuenta(sesion);

        ajustesNombre.value = partesNombre.nombre;
        ajustesApellidos.value = partesNombre.apellidos;
        ajustesCorreo.value = sesion.correo || correoUsuarioActual;
        ajustesPassword.value = "";

        if (btnEliminarCuentaAjustes) {
            const esAdmin = formatearRol(sesion.rol) === "Admin";
            btnEliminarCuentaAjustes.hidden = esAdmin;
            btnEliminarCuentaAjustes.style.display = esAdmin ? "none" : "";
        }

        modalAjustesCuenta.hidden = false;
        cerrarMenusDesplegables();

    }

    function cerrarAjustesCuenta() {

        modalAjustesCuenta.hidden = true;
        formAjustesCuenta.reset();

    }

    document.querySelectorAll(".btnAbrirAjustes").forEach((botonAjustes) => {

        botonAjustes.addEventListener("click", (e) => {
            e.preventDefault();
            abrirAjustesCuenta();
        });

    });

    document.querySelectorAll(".nav-usuario a").forEach((enlaceMenu) => {

        enlaceMenu.addEventListener("click", () => {
            cerrarMenusDesplegables();
        });

    });

    if (btnCerrarAjustes) {
        btnCerrarAjustes.addEventListener("click", cerrarAjustesCuenta);
    }

    if (modalAjustesCuenta) {
        modalAjustesCuenta.addEventListener("click", (e) => {
            if (e.target === modalAjustesCuenta) {
                cerrarAjustesCuenta();
            }
        });
    }

    if (formAjustesCuenta) {

        formAjustesCuenta.addEventListener("submit", async (e) => {

            e.preventDefault();

            const sesion = obtenerDatosSesionActual();
            const idCuenta = sesion.id || usuarioActualId;
            const nombreAnterior = usuarioActual;
            const correoAnterior = correoUsuarioActual;
            const nombre = ajustesNombre.value.trim();
            const apellidos = ajustesApellidos.value.trim();
            const correo = ajustesCorreo.value.trim();
            const password = ajustesPassword.value.trim();

            if (!idCuenta) {
                alert("No se puede actualizar esta cuenta porque no tiene id en MySQL.");
                return;
            }

            if (!esNombrePersonaValido(nombre) || !esNombrePersonaValido(apellidos)) {
                alert("Nombre y apellidos solo pueden tener letras y espacios.");
                return;
            }

            try {
                const cuentaActualizada = await apiRequest(`/users/${idCuenta}`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        nombre,
                        apellidos,
                        correo,
                        password
                    })
                });

                if (password) {
                    cuentaActualizada.password = password;
                }

                cuentaActualizada.rol = formatearRol(cuentaActualizada.rol || sesion.rol);
                usuarioActual = cuentaActualizada.nombre;
                correoUsuarioActual = cuentaActualizada.correo;
                usuarioActualId = cuentaActualizada.id || idCuenta;
                rolUsuarioActual = cuentaActualizada.rol;

                guardarSesion(cuentaActualizada);
                actualizarPerfilVisible(cuentaActualizada);
                actualizarCuentaEnLocalStorage(cuentaActualizada, correoAnterior, nombreAnterior);
                refrescarPantallasAbiertas();
                cerrarAjustesCuenta();
                alert("Cuenta actualizada correctamente");
            } catch (error) {
                if (error.message.includes("registrado")) {
                    mostrarModalCorreoExistente(correo, ajustesCorreo);
                    return;
                }

                alert(error.message || "No se pudo actualizar la cuenta");
            }

        });

    }

    if (btnEliminarCuentaAjustes) {

        btnEliminarCuentaAjustes.addEventListener("click", async () => {

            const sesion = obtenerDatosSesionActual();

            if (formatearRol(sesion.rol) === "Admin") {
                alert("Los administradores no pueden eliminar su propia cuenta desde ajustes.");
                return;
            }

            const confirmado = await mostrarConfirmacion({
                titulo: "Eliminar cuenta",
                texto: `Se eliminara la cuenta de ${sesion.nombre}. Tambien se borraran sus tickets asociados. Esta accion no se puede deshacer.`,
                confirmar: "Eliminar cuenta",
                peligro: true,
                icono: "fa-solid fa-trash"
            });

            if (!confirmado) {
                return;
            }

            try {
                await eliminarCuenta(sesion);
                cerrarAjustesCuenta();
                cerrarSesionActual();
                renderRegistradosAdmin();
                renderTicketsAdmin();
                renderTicketsTecnico();
                alert("Cuenta eliminada correctamente");
            } catch (error) {
                alert(error.message || "No se pudo eliminar la cuenta");
            }

        });

    }

    document.querySelectorAll("[data-toggle-password]").forEach((botonPassword) => {

        botonPassword.addEventListener("click", () => {

            const inputPassword = document.getElementById(botonPassword.dataset.togglePassword);

            if (!inputPassword) {
                return;
            }

            const mostrando = inputPassword.type === "text";
            inputPassword.type = mostrando ? "password" : "text";
            botonPassword.setAttribute("aria-label", mostrando ? "Mostrar contrasena" : "Ocultar contrasena");
            botonPassword.innerHTML = mostrando ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';

        });

    });

    if (btnNotificacionesUsuario && panelNotificacionesUsuario) {

        btnNotificacionesUsuario.addEventListener("click", (e) => {

            e.stopPropagation();
            panelNotificacionesUsuario.hidden = !panelNotificacionesUsuario.hidden;

            if (!panelNotificacionesUsuario.hidden) {
                marcarNotificacionesUsuarioLeidas();
                renderNotificacionesUsuario();
            }

        });

        document.addEventListener("click", (e) => {

            if (!panelNotificacionesUsuario.hidden && !panelNotificacionesUsuario.contains(e.target) && !btnNotificacionesUsuario.contains(e.target)) {
                panelNotificacionesUsuario.hidden = true;
            }

        });

    }

    if (btnNotificacionesTecnico && panelNotificacionesTecnico) {

        btnNotificacionesTecnico.addEventListener("click", (e) => {

            e.stopPropagation();
            panelNotificacionesTecnico.hidden = !panelNotificacionesTecnico.hidden;

            if (!panelNotificacionesTecnico.hidden) {
                marcarNotificacionesTecnicoLeidas();
                renderNotificacionesTecnico();
            }

        });

        document.addEventListener("click", (e) => {

            if (!panelNotificacionesTecnico.hidden && !panelNotificacionesTecnico.contains(e.target) && !btnNotificacionesTecnico.contains(e.target)) {
                panelNotificacionesTecnico.hidden = true;
            }

        });

    }

    if (btnNotificacionesAdmin && panelNotificacionesAdmin) {

        btnNotificacionesAdmin.addEventListener("click", (e) => {

            e.stopPropagation();
            panelNotificacionesAdmin.hidden = !panelNotificacionesAdmin.hidden;

            if (!panelNotificacionesAdmin.hidden) {
                marcarNotificacionesAdminLeidas();
                renderNotificacionesAdmin();
            }

        });

        document.addEventListener("click", (e) => {

            if (!panelNotificacionesAdmin.hidden && !panelNotificacionesAdmin.contains(e.target) && !btnNotificacionesAdmin.contains(e.target)) {
                panelNotificacionesAdmin.hidden = true;
            }

        });

    }

    botonesLogout.forEach((botonLogout) => {

        botonLogout.addEventListener("click", (e) => {

            e.preventDefault();
            cerrarSesionActual();

        });

    });

    function abrirCrearCuentaAdmin() {

        if (!modalCrearCuentaAdmin) {
            return;
        }

        if (formCrearCuentaAdmin) {
            formCrearCuentaAdmin.reset();
        }

        if (adminCrearPais) {
            adminCrearPais.value = "Colombia";
        }

        modalCrearCuentaAdmin.hidden = false;

        if (adminCrearRol) {
            adminCrearRol.focus();
        }

    }

    function cerrarCrearCuentaAdmin() {

        if (modalCrearCuentaAdmin) {
            modalCrearCuentaAdmin.hidden = true;
        }

    }

    if (btnAbrirCrearCuentaAdmin) {
        btnAbrirCrearCuentaAdmin.addEventListener("click", abrirCrearCuentaAdmin);
    }

    if (btnCerrarCrearCuentaAdmin) {
        btnCerrarCrearCuentaAdmin.addEventListener("click", cerrarCrearCuentaAdmin);
    }

    if (modalCrearCuentaAdmin) {
        modalCrearCuentaAdmin.addEventListener("click", (e) => {
            if (e.target === modalCrearCuentaAdmin) {
                cerrarCrearCuentaAdmin();
            }
        });
    }

    if (modalCorreoExistente) {

        modalCorreoExistente.addEventListener("click", (e) => {

            if (e.target === modalCorreoExistente) {
                cerrarModalCorreoExistente();
            }

        });

    }

    if (btnCerrarCorreoExistente) {
        btnCerrarCorreoExistente.addEventListener("click", cerrarModalCorreoExistente);
    }

    if (btnUsarOtroCorreo) {
        btnUsarOtroCorreo.addEventListener("click", () => {
            cerrarModalCorreoExistente();

            if (campoCorreoExistente) {
                campoCorreoExistente.focus();
                campoCorreoExistente.select();
            }
        });
    }

    if (btnLoginCorreoExistente) {
        btnLoginCorreoExistente.addEventListener("click", () => {
            const correo = modalCorreoExistente.dataset.correo || "";
            cerrarModalCorreoExistente();
            mostrarLogin();

            if (correo) {
                usuarioInput.value = correo;
                passwordInput.focus();
            } else {
                usuarioInput.focus();
            }
        });
    }

    formRegistro.addEventListener("submit", async (e) => {

        e.preventDefault();

        const nombreRegistro = registroNombre.value.trim();
        const apellidosRegistro = registroApellidos.value.trim();

        if (!esNombrePersonaValido(nombreRegistro) || !esNombrePersonaValido(apellidosRegistro)) {
            alert("Nombre y apellidos solo pueden tener letras y espacios.");
            return;
        }

        if (registroPassword.value !== registroConfirmPassword.value) {

            alert("Las contrasenas no coinciden");
            return;

        }

        const correoRegistro = registroCorreo.value.trim();
        const correoExiste = obtenerUsuariosLogin().some((usuario) => normalizarTexto(usuario.correo) === normalizarTexto(correoRegistro));

        if (correoExiste) {

            mostrarModalCorreoExistente(correoRegistro);
            return;

        }

        let nuevoUsuario = {
            nombre: `${nombreRegistro} ${apellidosRegistro}`,
            rol: "Usuario",
            correo: correoRegistro,
            password: registroPassword.value,
            ciudad: registroCiudad.value,
            pais: registroPais.value,
            nacimiento: registroNacimiento.value,
            estado: "Registrado"
        };

        try {
            nuevoUsuario = await apiRequest("/register", {
                method: "POST",
                body: JSON.stringify({
                    nombre: nombreRegistro,
                    apellidos: apellidosRegistro,
                    correo: correoRegistro,
                    password: registroPassword.value,
                    ciudad: registroCiudad.value,
                    pais: registroPais.value,
                    nacimiento: registroNacimiento.value
                })
            });
            nuevoUsuario.password = registroPassword.value;
            usuarioActualId = nuevoUsuario.id;
        } catch (error) {
            if (error.message.includes("registrado")) {
                mostrarModalCorreoExistente(correoRegistro);
                return;
            }
            alert("No se pudo guardar en MySQL. Revisa que el servidor tenga configurada la contrasena de la BD.");
            return;
        }

        guardarRegistrado(nuevoUsuario);
        renderRegistradosAdmin();

        usuarioActual = nuevoUsuario.nombre;
        correoUsuarioActual = nuevoUsuario.correo;
        guardarSesion(nuevoUsuario);
        nombrePerfilUsuario.textContent = usuarioActual;
        login.style.display = "none";
        pantallaUsuario.style.display = "block";
        pantallaAdmin.style.display = "none";
        pantallaTecnico.style.display = "none";
        actualizarFooterSesion(true);

        alert("Registro completado correctamente. Ya puedes crear tickets.");
        formRegistro.reset();
        actualizarEstadoUsuarioActual();
        mostrarCrearTicketUsuario();

    });

    if (formCrearCuentaAdmin) {

        formCrearCuentaAdmin.addEventListener("submit", async (e) => {

            e.preventDefault();

            const nombreAdmin = adminCrearNombre.value.trim();
            const apellidosAdmin = adminCrearApellidos.value.trim();

            if (!esNombrePersonaValido(nombreAdmin) || !esNombrePersonaValido(apellidosAdmin)) {
                alert("Nombre y apellidos solo pueden tener letras y espacios.");
                return;
            }

            let nuevaCuenta = {
                nombre: `${nombreAdmin} ${apellidosAdmin}`.trim(),
                rol: formatearRol(adminCrearRol.value),
                correo: adminCrearCorreo.value.trim(),
                password: adminCrearPassword.value,
                ciudad: adminCrearCiudad.value.trim(),
                pais: adminCrearPais.value.trim(),
                nacimiento: adminCrearNacimiento.value || "",
                estado: "Activo"
            };

            const correoExiste = [...cuentasEspeciales, ...usuariosNormalesBase, ...obtenerRegistrados()].some((usuarioRegistrado) => (
                normalizarTexto(usuarioRegistrado.correo) === normalizarTexto(nuevaCuenta.correo)
            ));

            if (correoExiste) {
            mostrarModalCorreoExistente(nuevaCuenta.correo, adminCrearCorreo);
                return;
            }

            try {
                nuevaCuenta = await apiRequest("/users", {
                    method: "POST",
                    body: JSON.stringify({
                        nombre: nombreAdmin,
                        apellidos: apellidosAdmin,
                        correo: nuevaCuenta.correo,
                        password: adminCrearPassword.value,
                        rol: adminCrearRol.value,
                        ciudad: nuevaCuenta.ciudad,
                        pais: nuevaCuenta.pais,
                        nacimiento: adminCrearNacimiento.value || null
                    })
                });
                nuevaCuenta.rol = formatearRol(nuevaCuenta.rol);
                nuevaCuenta.password = adminCrearPassword.value;
            } catch (error) {
                if (error.message.includes("registrado")) {
                    mostrarModalCorreoExistente(nuevaCuenta.correo, adminCrearCorreo);
                    return;
                }
                alert("No se pudo guardar en MySQL. Revisa que el servidor tenga configurada la contrasena de la BD.");
                return;
            }

            guardarRegistrado(nuevaCuenta);
            renderRegistradosAdmin();
            formCrearCuentaAdmin.reset();
            adminCrearPais.value = "Colombia";
            cerrarCrearCuentaAdmin();
            alert("Cuenta creada correctamente");

        });

    }

    function activarMenuUsuario(botonActivo) {

        btnCrearTicketUsuario.parentElement.classList.remove("activo");
        btnEstadoTicketUsuario.parentElement.classList.remove("activo");
        botonActivo.parentElement.classList.add("activo");

    }

    function mostrarCrearTicketUsuario() {

        crearTicketUsuario.style.display = "flex";
        estadoTicketUsuario.style.display = "none";
        activarMenuUsuario(btnCrearTicketUsuario);

    }

    function mostrarEstadoTicketUsuario() {

        actualizarEstadoUsuarioActual();
        crearTicketUsuario.style.display = "none";
        estadoTicketUsuario.style.display = "flex";
        activarMenuUsuario(btnEstadoTicketUsuario);

    }

    btnCrearTicketUsuario.addEventListener("click", (e) => {

        e.preventDefault();
        mostrarCrearTicketUsuario();

    });

    btnEstadoTicketUsuario.addEventListener("click", (e) => {

        e.preventDefault();
        mostrarEstadoTicketUsuario();

    });

    if (btnDashboardTecnico) {
        btnDashboardTecnico.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarDashboardTecnico();
        });
    }

    if (btnTicketsTecnico) {
        btnTicketsTecnico.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarTicketsTecnico();
        });
    }

    formCrearTicketUsuario.addEventListener("submit", async (e) => {

        e.preventDefault();

        const tecnicoAsignado = asignarTecnicoAutomatico(ticketCiudadUsuario.value);
        const ciudadTicket = ticketCiudadUsuario.value;
        const sedeCercana = obtenerSedeCercana(ciudadTicket);
        const quiereRecogida = await mostrarConfirmacion({
            titulo: "Servicio de recogida",
            texto: "Deseas que te recojan el dispositivo en tu casa?",
            confirmar: "Si, recogerlo",
            cancelar: "No, lo llevo a sede",
            icono: "fa-solid fa-truck-fast"
        });
        let direccionRecogida = "";

        if (quiereRecogida) {
            direccionRecogida = await solicitarDireccionRecogida();

            if (!direccionRecogida) {
                return;
            }
        } else {
            const continuarSinRecogida = await mostrarConfirmacion({
                titulo: "Sede y tecnico asignados",
                texto: `Tu zona mas cercana es ${sedeCercana}. El tecnico asignado sera ${tecnicoAsignado.nombre}.`,
                confirmar: "Entendido",
                cancelar: "Cancelar ticket",
                icono: "fa-solid fa-location-dot"
            });

            if (!continuarSinRecogida) {
                return;
            }
        }

        let ticket = {
            id: generarTicketId(),
            usuarioId: usuarioActualId,
            usuario: usuarioActual,
            correoUsuario: correoUsuarioActual,
            ciudad: ciudadTicket,
            dispositivo: ticketCategoriaUsuario.value,
            problema: ticketTituloUsuario.value,
            descripcion: ticketDescripcionUsuario.value,
            estado: "Abierto",
            prioridad: ticketPrioridadUsuario.value,
            tecnico: tecnicoAsignado.nombre,
            fecha: new Date().toLocaleDateString("es-CO"),
            comentarioTecnico: "El tecnico aun no ha aceptado el trabajo.",
            valorArreglo: "0",
            recogidaDomicilio: quiereRecogida,
            direccionRecogida,
            sedeCercana
        };

        if (usuarioActualId) {
            try {
                ticket = await apiRequest("/tickets", {
                    method: "POST",
                    body: JSON.stringify({
                        usuarioId: usuarioActualId,
                        ciudad: ciudadTicket,
                        dispositivo: ticketCategoriaUsuario.value,
                        problema: ticketTituloUsuario.value,
                        descripcion: ticketDescripcionUsuario.value,
                        prioridad: ticketPrioridadUsuario.value,
                        recogidaDomicilio: quiereRecogida,
                        direccionRecogida,
                        sedeCercana
                    })
                });
            } catch (error) {
                console.warn(error.message);
            }
        }

        guardarTicket(ticket);
        actualizarEstadoUsuarioActual();
        renderTicketsAdmin();
        renderTicketsTecnico();

        alert(`Ticket creado correctamente. Tecnico asignado: ${ticket.tecnico || tecnicoAsignado.nombre}`);
        formCrearTicketUsuario.reset();
        mostrarEstadoTicketUsuario();

    });

    // LOGIN
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const user = usuarioInput.value.trim();
        const pass = passwordInput.value.trim();
        let usuarioRegistrado = buscarUsuarioLogin(user, pass);
        const cuentaEspecial = buscarCuentaEspecialLogin(user, pass);
        let usuarioApi = null;

        try {
            usuarioApi = await apiRequest("/login", {
                method: "POST",
                body: JSON.stringify({
                    correo: user,
                    password: pass
                })
            });
            usuarioActualId = usuarioApi.id;
            await cargarDatosDesdeApi();
        } catch (error) {
            usuarioActualId = null;
        }

        const datosSesion = usuarioApi || cuentaEspecial || usuarioRegistrado;
        const valor = datosSesion ? normalizarTexto(datosSesion.rol) : "";

        if (datosSesion) {

            mostrarPantallaSesion(datosSesion);

        } else {

            alert("Credenciales incorrectas");

        }

    });

    // FUNCION PARA OCULTAR TODO
    function ocultarSeccionesAdmin() {

        dashboard.style.display = "none";
        activos.style.display = "none";
        registradosAdmin.style.display = "none";

        if (tickets) {
            tickets.style.display = "none";
        }

    }

    // DASHBOARD
    if (btnDashboard) {

        btnDashboard.addEventListener("click", (e) => {

            e.preventDefault();

            ocultarSeccionesAdmin();
            renderDashboardAdmin();

            dashboard.style.display = "block";

        });

    }

    // ACTIVOS
    if (btnActivos) {

        btnActivos.addEventListener("click", (e) => {

            e.preventDefault();

            ocultarSeccionesAdmin();
            renderActivosAdmin();

            activos.style.display = "flex";

        });

    }

    if (buscarActivoAdmin) {

        buscarActivoAdmin.addEventListener("input", renderActivosAdmin);

    }

    if (filtroEstadoActivoAdmin) {

        filtroEstadoActivoAdmin.addEventListener("change", renderActivosAdmin);

    }

    if (filtroEstadoTicketUsuario) {

        filtroEstadoTicketUsuario.addEventListener("change", renderEstadoUsuario);

    }

    cargarDatosDesdeApi().then(() => {
        renderDashboardAdmin();
        renderActivosAdmin();
        renderTicketsAdmin();
        renderRegistradosAdmin();
    });

    // TICKETS
    if (btnTickets && tickets) {

        btnTickets.addEventListener("click", (e) => {

            e.preventDefault();

            ocultarSeccionesAdmin();
            renderTicketsAdmin();

            tickets.style.display = "flex";

        });

    }

    // REGISTRADOS
    if (btnRegistrados && registradosAdmin) {

        btnRegistrados.addEventListener("click", (e) => {

            e.preventDefault();

            ocultarSeccionesAdmin();
            renderRegistradosAdmin();

            registradosAdmin.style.display = "flex";

        });

    }

    window.addEventListener("storage", (event) => {

        if ([ticketsDbKey, ticketsEliminadosKey, usuariosDbKey, notificacionesKey, sincronizacionKey].includes(event.key)) {
            if (!reconciliarSesionConCuentaActual()) {
                refrescarPantallasAbiertas();
            }
        }

        if (event.key === sesionActualKey && !event.newValue) {
            pantallaUsuario.style.display = "none";
            pantallaAdmin.style.display = "none";
            pantallaTecnico.style.display = "none";
            login.style.display = "flex";
            actualizarFooterSesion(false);
            mostrarLogin();
        }

    });

    setInterval(() => {

        if (obtenerSesionGuardada()) {
            sincronizarDatos();
        }

    }, 5000);

    (async () => {

        await sincronizarDatos();
        const sesionGuardada = obtenerSesionGuardada();

        if (sesionGuardada) {
            mostrarPantallaSesion(sesionGuardada, false);
        }

    })();

});
