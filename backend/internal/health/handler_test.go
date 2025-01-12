package health_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"

	"github.com/famed-airdrop-prototype/backend/internal/health"
)

func TestHealthCheckServiceAvailable(t *testing.T) {
	expectedResponse := `{"version":"0.0.1"}
`
	recorder := httptest.NewRecorder()
	actualRequest := httptest.NewRequest(http.MethodGet, "/health", nil)
	context := echo.New().NewContext(actualRequest, recorder)
	healthHandler := health.NewHandler()

	// WHEN
	err := healthHandler.GetHealth(context)

	// THEN
	assert.Nil(t, err)
	assert.Equal(t, http.StatusOK, recorder.Code)
	assert.Equal(t, expectedResponse, recorder.Body.String())
}
