function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="modal-overlay">
			<div class="modal-window">
				<div class="modal-header">
					<span class="modal-title">Modal Title</span>
					<span class="modal-close">&times;</span>
				</div>
				<div class="modal-body">
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
				</div>
				<div class="modal-footer">
					<button>Ok</button>
					<button>Cancel</button>
				</div>
			</div>
		</div>
    `
    )

    document.body.appendChild(modal)

    return modal
}

$.modal = function(options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options);
  let isClosing = false;

  return {
    open() {
        !isClosing && $modal.classList.add('open');
    },
    close() {
        isClosing = true;
        $modal.classList.remove('open');
        $modal.classList.add('hide')

        setTimeout(() => {
            $modal.classList.remove('hide');
            isClosing = false
        }, ANIMATION_SPEED);
    },
    destroy() {},
  };
};